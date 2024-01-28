'use strict';

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyEl() {
  boxContainer.textContent = '';
}

function createBoxes(amount) {
  let sizeStart = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = sizeStart + 'px';
    box.style.height = sizeStart + 'px';
    box.style.background = getRandomHexColor();
    sizeStart += 10;
    boxContainer.insertAdjacentElement('beforeend', box);
  }
  input.value = '';
}

btnCreate.addEventListener('click', () => {
  if (Number(input.value) >= 1 && Number(input.value) <= 100) {
    destroyEl();
    createBoxes(Number(input.value));
  } else {
    alert('Enter a value between 1 and 100');
  }
});
btnDestroy.addEventListener('click', destroyEl);
