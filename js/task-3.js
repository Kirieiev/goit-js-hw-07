'use strict';
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const valueEl = event.target.value;
  outputEl.textContent = valueEl.trim();
  if (valueEl === '' || valueEl.trim() === '') {
    outputEl.textContent = 'Anonymous';
  }
});
