function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    popup.classList.add('show-popup');
    setTimeout(function () {
      popup.classList.remove('show-popup');
    }, 2000);
    return true;
  } else {
    showError('Please provide a valid email');
    return false;
  }
}

const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const input = form.querySelector('input');
const error = form.querySelector('.error');
const errorText = form.querySelector('.error-text');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (input.value) ValidateEmail(input);
  else {
    showError('This field is required!!');
  }
});

function showError(text) {
  errorText.textContent = text;
  form.classList.add('active');
  setTimeout(function () {
    errorText.textContent = '';
    form.classList.remove('active');
  }, 2000);
}

function hideError() {
  errorText.textContent = '';
  form.classList.remove('active');
}
