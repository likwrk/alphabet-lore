function init() {
  const container = document.querySelector('.container');
  container.addEventListener('click', (e) => {
    const target = e.target;
    const letter = target.getAttribute('data-letter');
    if (!letter) return;
    if (target.className.indexOf('zoom-in') === -1) {
      target.parentElement.classList.add('animation-inc');
      target.classList.add('zoom-in');
      setTimeout(() => {
        target.classList.remove('zoom-in');
        target.parentElement.classList.remove('animation-inc');
      }, 1000);
    }
    const a = new Audio('aac/' + letter + '.aac');
    a.loop = false;
    a.play();
  });
}

(function() {
  window.addEventListener('DOMContentLoaded', init);
})();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
