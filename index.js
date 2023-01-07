function init() {
  const container = document.querySelector('.container');
  console.log('container', container);
  container.addEventListener('click', (e) => {
    const target = e.target;
    const letter = target.getAttribute('data-letter');
    if (!letter) return;
    if (target.className.indexOf('zoom-in') === -1) {
      target.classList.add('zoom-in');
      setTimeout(() => {
        target.classList.remove('zoom-in');
      }, 1000);
    }
    const a = new Audio('aac/' + letter + '.aac');
    a.loop = false;
    a.play();
  });
}

(function() {
  console.log('alt');
  window.addEventListener('DOMContentLoaded', init);
})();
