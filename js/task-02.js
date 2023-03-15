"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Obtener la lista ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Crear una lista de elementos li para cada ingrediente en el array ingredients
const ingredientsItems = ingredients.map((ingredient) => {
  // Crear un nuevo elemento li
  const li = document.createElement('li');

  // Agregar el nombre del ingrediente como contenido de texto
  li.textContent = ingredient;

  // Agregar la clase "item" al elemento li
  li.classList.add('item');

  return li;
});

// Insertar todos los elementos li en la lista ul#ingredients
ingredientsList.append(...ingredientsItems);
