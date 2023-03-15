"use strict";

// Obtener referencias a los elementos HTML necesarios
const value = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

// Inicializar el valor del contador en 0
let counterValue = 0;

// Agregar escuchas de clic a los botones para actualizar el valor del contador
incrementButton.addEventListener('click', () => {
  counterValue++;
  value.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  value.textContent = counterValue;
});
