(function () {
  var WA = 'https://wa.me/526563556282?text=';

  // Keep the promo button's WhatsApp message in sync with the promo title.
  var promoTitle = document.querySelector('[data-promo-title]');
  var promoCta = document.querySelector('[data-promo-cta]');
  if (promoTitle && promoCta) {
    promoCta.href = WA + encodeURIComponent('Hola, me interesa la promoción: ' + promoTitle.textContent.trim());
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Soft reveal on scroll.
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
