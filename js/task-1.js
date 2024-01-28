'use strict';

const elementLi = document.querySelectorAll('.item');
console.log(`Number of category: ${elementLi.length}`);
elementLi.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
