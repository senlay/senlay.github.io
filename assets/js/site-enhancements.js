document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('site-optimized');

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
