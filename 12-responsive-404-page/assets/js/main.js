/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', function () {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', function () {
  navMenu.classList.remove('show-menu');
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: '90px',
  duration: 3000,
});

sr.reveal('.home__data', { origin: 'top', delay: 400 });
sr.reveal('.home__img', { origin: 'bottom', delay: 600 });
sr.reveal('.home__footer', { origin: 'bottom', delay: 800 });
