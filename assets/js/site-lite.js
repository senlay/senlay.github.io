document.addEventListener('DOMContentLoaded', function () {
  var yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
