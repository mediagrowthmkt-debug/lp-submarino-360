(function () {
  'use strict';

  /* ——— HEADER SCROLL ——— */
  var header = document.getElementById('header');
  function handleScroll() {
    header.classList.toggle('scrolled', window.scrollY > 48);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ——— MOBILE MENU ——— */
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');
  hamburger.addEventListener('click', function () {
    var open = navLinks.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navLinks.classList.remove('nav--open');
      document.body.style.overflow = '';
    }
  });

  /* ——— SCROLL REVEAL ——— */
  var reveals = document.querySelectorAll('[data-reveal]');
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
      setTimeout(function () {
        entry.target.classList.add('revealed');
      }, delay);
      revealObs.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { revealObs.observe(el); });

  /* ——— SMOOTH SCROLL ——— */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight + 12 : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ——— GALLERY CAROUSEL ——— */
  (function () {
    var track     = document.getElementById('galleryTrack');
    var prevBtn   = document.getElementById('galleryPrev');
    var nextBtn   = document.getElementById('galleryNext');
    var dotsWrap  = document.getElementById('galleryDots');
    if (!track) return;

    var slides   = track.querySelectorAll('.gslide');
    var total    = slides.length;
    var current  = 0;

    function perView() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 900) return 2;
      return 3;
    }

    function maxIdx() { return Math.max(0, total - perView()); }

    function slideWidth() {
      if (!slides[0]) return 0;
      return slides[0].offsetWidth + 20; // gap
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIdx()));
      track.style.transform = 'translateX(-' + (current * slideWidth()) + 'px)';
      dotsWrap.querySelectorAll('.gallery-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      var count = maxIdx() + 1;
      for (var i = 0; i < count; i++) {
        var d = document.createElement('button');
        d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        (function (idx) {
          d.addEventListener('click', function () { goTo(idx); });
        }(i));
        dotsWrap.appendChild(d);
      }
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); });

    var autoPlay = setInterval(function () {
      goTo(current >= maxIdx() ? 0 : current + 1);
    }, 4500);

    track.parentElement.addEventListener('mouseenter', function () { clearInterval(autoPlay); });
    track.parentElement.addEventListener('mouseleave', function () {
      autoPlay = setInterval(function () {
        goTo(current >= maxIdx() ? 0 : current + 1);
      }, 4500);
    });

    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });

    window.addEventListener('resize', function () {
      buildDots();
      goTo(Math.min(current, maxIdx()));
    });

    buildDots();
    goTo(0);
  })();

  /* ——— FORM: cidade ——— */
  (function () {
    var form = document.getElementById('form-cidade');
    var ok   = document.getElementById('form-cidade-ok');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = form.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;
      setTimeout(function () {
        ok.classList.add('visible');
        form.reset();
        btn.textContent = orig;
        btn.disabled = false;
        setTimeout(function () { ok.classList.remove('visible'); }, 7000);
      }, 1000);
    });
  })();

  /* ——— FORM: contato ——— */
  (function () {
    var form = document.getElementById('form-contato');
    var ok   = document.getElementById('form-contato-ok');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = form.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Enviando…';
      btn.disabled = true;
      setTimeout(function () {
        ok.classList.add('visible');
        form.reset();
        btn.textContent = orig;
        btn.disabled = false;
        setTimeout(function () { ok.classList.remove('visible'); }, 7000);
      }, 1000);
    });
  })();

})();