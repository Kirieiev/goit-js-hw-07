'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');
button.addEventListener('click', () => {
  const validColor = getRandomHexColor();
  bodyColor.style.backgroundColor = validColor;
  textColor.textContent = validColor;
});
