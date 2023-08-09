const notifications = document.querySelectorAll('.notification');
const number = document.querySelector('#number');
const btn = document.querySelector('.read-btn');

btn.addEventListener('click', function () {
  notifications.forEach(function (notification) {
    if (notification.classList.contains('unread')) {
      notification.classList.remove('unread');
      number.style.display = 'none';
    }
  });
});

let count = 0;
notifications.forEach(function (notification) {
  if (notification.classList.contains('unread')) count++;
});

if (count > 0) {
  number.style.display = 'flex';
  number.innerHTML = count;
} else number.style.display = 'none';
