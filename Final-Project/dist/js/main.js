// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const body = document.querySelector('body');

// Menu State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.remove('hide');
    body.classList.add('hide-overflow');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.add('hide');
    body.classList.remove('hide-overflow');
    showMenu = false;
  }
}
