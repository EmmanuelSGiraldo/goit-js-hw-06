"use strict";

const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const inputLength = input.getAttribute('data-length');
  const inputValue = input.value;

  if (inputValue.length === parseInt(inputLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
