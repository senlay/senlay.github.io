document.addEventListener('DOMContentLoaded', function () {
  var progressBar = document.createElement('div');
  progressBar.className = 'site-progress';
  document.body.appendChild(progressBar);

  var toTopBtn = document.createElement('button');
  toTopBtn.className = 'to-top';
  toTopBtn.setAttribute('aria-label', 'Back to top');
  toTopBtn.innerHTML = '↑';
  toTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(toTopBtn);

  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var progress = total > 0 ? (scrollTop / total) * 100 : 0;
    progressBar.style.width = progress + '%';
    toTopBtn.classList.toggle('visible', scrollTop > 200);
  }

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  document.querySelectorAll('.home-blog .card, .home-blog .info-wrapper, .page .content__default, .content__default > *').forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  document.querySelectorAll('img:not([loading])').forEach(function (img) {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  document.querySelectorAll('img').forEach(function (img) {
    if (!img.getAttribute('alt')) {
      img.setAttribute('alt', 'blog image');
    }
  });

  document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
    if (!link.getAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
