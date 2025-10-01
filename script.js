<!-- START: Light Blue Landing for Guttweiler Inc -->
<header class="site-nav">
  <div class="wrap container">
    <div class="site-logo">Guttweiler Inc</div>
    <nav class="site-menu">
      <a href="#services">Services</a>
      <a href="#how">How it Works</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="btn-nav" href="tel:+12393915089">Call 239-391-5089</a>
  </div>
</header>

<section class="hero" role="banner">
  <div class="inner container">
    <h1 class="reveal">Expert Mobile Gutter, Soffit &amp; Fascia</h1>
    <p class="reveal" style="max-width:780px">
      Fast, clean, on-site service across Lehigh Acres, Fort Myers, Cape Coral, Naples, and surrounding Southwest Florida.
    </p>
    <div class="hero-ctas reveal" style="margin-top:14px">
      <a class="btn-primary" href="#contact">Get a Free Estimate</a>
      <a class="btn-ghost" href="tel:+12393915089">Call 239-391-5089</a>
    </div>
  </div>
</section>

<section id="how" class="section how container">
  <h2 class="reveal">How it Works</h2>
  <div class="steps reveal">
    <div class="step">
      <div class="num">1</div>
      <h4>Request a Quote</h4>
      <p>Send a few details or call and we’ll schedule a free on-site visit.</p>
    </div>
    <div class="step">
      <div class="num">2</div>
      <h4>On-site Visit</h4>
      <p>We inspect, measure and give you a transparent estimate.</p>
    </div>
    <div class="step">
      <div class="num">3</div>
      <h4>Install & Clean Up</h4>
      <p>We install with precision and leave your property spotless.</p>
    </div>
  </div>
</section>

<section id="services" class="section services">
  <div class="container">
    <h2 class="reveal">Our Gutter, Soffit &amp; Fascia Services</h2>
    <p class="reveal" style="max-width:820px;color:var(--muted)">Serving Lehigh Acres, Fort Myers, Cape Coral, Naples, and the entire Southwest Florida region.</p>

    <div class="services-grid reveal">
      <div class="service-card">
        <h3>Gutter Installation</h3>
        <p>Protect your home with seamless, custom-fit gutters. We use durable aluminum and ensure proper pitch to direct water away from foundations.</p>
        <a class="svc-cta" href="tel:+12393915089">Call Now</a>
      </div>
      <div class="service-card">
        <h3>Soffit Installation</h3>
        <p>Improve ventilation and protect your roof. We install ventilated soffit systems that reduce moisture buildup and improve attic health.</p>
        <a class="svc-cta" href="#contact">Free Estimate</a>
      </div>
      <div class="service-card">
        <h3>Fascia Installation</h3>
        <p>Replace rotted or damaged fascia with weather-resistant materials that protect the roof edge and support your gutter system.</p>
        <a class="svc-cta" href="#contact">Get Quote</a>
      </div>
      <div class="service-card">
        <h3>Reliable, Affordable Services</h3>
        <p>We combine skilled craftsmanship with fair pricing — trusted by homeowners across Southwest Florida.</p>
        <a class="svc-cta" href="#contact">Contact Us</a>
      </div>
    </div>
  </div>
</section>

<section id="about" class="section why container">
  <h2 class="reveal">About Guttweiler Inc.</h2>
  <p class="reveal" style="max-width:820px">
    Family-owned and proudly serving Southwest Florida. Our mission is to protect homes with quality craftsmanship and trusted service.
  </p>
  <div class="why-grid reveal">
    <div class="why-box"><strong>Quality you can trust</strong><div>Durable materials and precise installs for long-lasting protection.</div></div>
    <div class="why-box"><strong>Local expertise</strong><div>We know Florida weather and build solutions that last.</div></div>
    <div class="why-box"><strong>Fast response</strong><div>Request a quote and we'll respond within 24 hours.</div></div>
  </div>
</section>

<section id="contact" class="section contact">
  <div class="container">
    <div class="box" role="form" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Us</h2>
      <p style="color:var(--muted)">Call <a href="tel:+12393915089">239-391-5089</a> or use the form below for a free estimate.</p>

      <!-- Si prefieres el form nativo de Web.com, reemplaza este <form> por el suyo -->
      <form id="demo-contact" style="display:grid;gap:10px;margin-top:12px">
        <input name="name" placeholder="Full name" required />
        <input name="address" placeholder="Address (optional)" />
        <input name="phone" placeholder="Phone" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="project" placeholder="Tell us about your project" rows="4" required></textarea>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          <button type="submit" class="btn-primary">Get a Free Estimate</button>
          <small>We’ll respond within 24 hours.</small>
        </div>
        <div id="form-msg" role="status" style="margin-top:8px;font-weight:700"></div>
      </form>
    </div>
  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="font-weight:800">Guttweiler Inc</div>
      <div style="color:#d9f0ff">Serving Lehigh Acres, Fort Myers, Cape Coral, Naples, and Southwest Florida</div>
      <div style="margin-top:8px"><a href="tel:+12393915089">239-391-5089</a> • info@guttweilerinc.com</div>
    </div>
  </div>
</footer>
<!-- END -->
<script>
// Reveal on scroll
document.addEventListener('DOMContentLoaded',()=>{
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
    });
  },{threshold:0.12});
  els.forEach(el=>io.observe(el));
});

// Demo submit (si usas el form nativo de Web.com, elimina este bloque)
(function(){
  const form=document.getElementById('demo-contact');
  const msg=document.getElementById('form-msg');
  if(!form) return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    msg.textContent="Thanks! We’ll contact you within 24 hours.";
    form.reset();
    setTimeout(()=>msg.textContent='',5000);
  });
})();

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const t=document.querySelector(this.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
</script>
