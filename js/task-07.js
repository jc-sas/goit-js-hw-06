const textEl = document.querySelector('#text');
const inputControlEl = document.querySelector('#font-size-control');

inputControlEl.addEventListener('input', () => {
  textEl.style.fontSize = inputControlEl.value + 'px';
});
