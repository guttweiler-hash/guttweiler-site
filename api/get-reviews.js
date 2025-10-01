// Vercel Serverless Function: /api/get-reviews
// Trae reseñas de Google Places sin exponer tu API key en el navegador.
// Acepta dos formas:
//  - Con PLACE_ID (más preciso), o
//  - Con BUSINESS_QUERY (usa Find Place from Text y luego Details)
//
// Requiere variable de entorno GOOGLE_PLACES_API_KEY (en Vercel)

export default async function handler(req, res) {
  try {
    // Habilitar CORS sencillo
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: 'missing_api_key' });
    }

    // Puedes pasar ?q=... para buscar por texto o ?place_id=...
    const { q, place_id } = req.query;

    // 1) Obtener placeId
    let placeId = place_id || process.env.PLACE_ID;

    if (!placeId) {
      // Buscar por texto. Si no viene q, usa tu negocio por defecto:
      const BUSINESS_QUERY = q || process.env.BUSINESS_QUERY || 'Guttweiler Inc, Florida';
      const findUrl = new URL('https://maps.googleapis.com/maps/api/place/findplacefromtext/json');
      findUrl.searchParams.set('input', BUSINESS_QUERY);
      findUrl.searchParams.set('inputtype', 'textquery');
      // Puedes sesgar con fields básicos
      findUrl.searchParams.set('fields', 'place_id,name,geometry');
      findUrl.searchParams.set('key', API_KEY);

      const findResp = await fetch(findUrl);
      const findData = await findResp.json();
      if (findData.status !== 'OK' || !findData.candidates || !findData.candidates.length) {
        return res.status(404).json({ error: 'place_not_found', status: findData.status, raw: findData });
      }
      placeId = findData.candidates[0].place_id;
    }

    // 2) Traer detalles + reseñas
    const detailsUrl = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    detailsUrl.searchParams.set('place_id', placeId);
    detailsUrl.searchParams.set('fields', 'name,rating,user_ratings_total,reviews,formatted_address,url');
    detailsUrl.searchParams.set('key', API_KEY);

    const detResp = await fetch(detailsUrl);
    const detData = await detResp.json();
    if (detData.status !== 'OK' || !detData.result) {
      return res.status(500).json({ error: 'details_error', status: detData.status, raw: detData });
    }

    // Normalizar reseñas (Google devuelve máx ~5)
    const r = detData.result;
    const reviews = (r.reviews || []).map(rv => ({
      author: rv.author_name,
      rating: rv.rating,
      text: rv.text,
      time: rv.time, // epoch seconds
      relative_time: rv.relative_time_description,
      profile_photo_url: rv.profile_photo_url
    }));

    // Cache cortito en edge/CDN
    res.setHeader('Cache-Control', 'public, s-maxage=600, max-age=300'); // 10min CDN / 5min browser

    return res.status(200).json({
      place_id: placeId,
      name: r.name,
      rating: r.rating,
      total: r.user_ratings_total,
      address: r.formatted_address,
      map_url: r.url,
      reviews
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'server_error', message: e.message });
  }
}
