const navbar = document.querySelector('#navbar');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links');

sidebarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    sidebar.classList.remove('show-sidebar');
    document.body.style.overflow = 'auto';
  });
});

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  document.body.style.overflow = 'auto';
});
