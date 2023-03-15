"use strict";
// Obtenemos los elementos HTML del input y del span utilizando su id
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Añadimos un event listener de tipo "input" al input
nameInput.addEventListener('input', () => {
  // Obtenemos el valor actual del input y lo guardamos en la variable "name"
  const name = nameInput.value;

  // Verificamos si el input está vacío. Si lo está, actualizamos el texto del span con la cadena "Anonymous"
  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  }
  // Si el input no está vacío, actualizamos el texto del span con el valor actual del input
  else {
    nameOutput.textContent = name;
  }
});

