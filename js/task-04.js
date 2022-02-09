let counterValue = 0;

const counter = document.querySelector('#counter');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const onBtnDecrement = () => {
  value.textContent = counterValue -= 1;
};

const onBtnIncrement = () => {
  value.textContent = counterValue += 1;
};

buttonDecr.addEventListener('click', onBtnDecrement);
buttonIncr.addEventListener('click', onBtnIncrement);
