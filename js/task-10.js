"use strict";



const numberOfElements = document.querySelector('input');
const createElements = document.querySelector('[data-create]');
const deleteElements = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

createElements.addEventListener('click', createBoxes);
deleteElements.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = numberOfElements.value;
  let size = 30;
  let color = '';

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    size += 10;
    newBox.style.width = size + 'px';
    newBox.style.height = size + 'px';
    color = getRandomHexColor();
    newBox.style.backgroundColor = color;
    box.appendChild(newBox);
  }
}

function destroyBoxes() {
  box.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
