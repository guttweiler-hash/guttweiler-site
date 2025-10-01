// Simple form handler
document.getElementById("mini-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("mini-msg").innerText = "✅ Thanks! We'll contact you shortly.";
  this.reset();
});
