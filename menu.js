const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const abierto = menu.classList.toggle('menu-open');
    menuToggle.classList.toggle('active', abierto);
    menuToggle.setAttribute('aria-expanded', abierto);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu-open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
