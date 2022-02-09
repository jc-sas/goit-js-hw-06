const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = Number(event.currentTarget.dataset.length);

  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');

  if (valueLength === requiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
