// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');

// Menu State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.remove('hide');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.add('hide');
    showMenu = false;
  }
}
