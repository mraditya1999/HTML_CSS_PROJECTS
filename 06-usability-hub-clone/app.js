const navBtn = document.querySelector('.nav-btn');
const navClose = document.querySelector('.nav-close');
const sidebar = document.querySelector('.sidebar');

navBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

navClose.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
