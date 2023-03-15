"use strict";
// Obtenemos el botón y el elemento que muestra el color
const button = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

// Agregamos el evento click al botón
button.addEventListener('click', () => {
  // Obtenemos un color aleatorio usando la función getRandomHexColor
  const randomColor = getRandomHexColor();

  // Cambiamos el color de fondo del body con el color obtenido
  document.body.style.backgroundColor = randomColor;

  // Actualizamos el texto que muestra el color
  colorText.textContent = randomColor;
});

// Función que genera un color aleatorio en formato hexadecimal
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
