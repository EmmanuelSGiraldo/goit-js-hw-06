"use strict";

// Obtener la lista ul#categories
const categoriesList = document.querySelector('#categories');

// Obtener todos los elementos li.item de la lista
const categories = categoriesList.querySelectorAll('li.item');

// Contar el número de categorías
const numOfCategories = categories.length;

// Mostrar el número de categorías en la consola
console.log(`Number of categories: ${numOfCategories}`);

// Para cada categoría, mostrar el título y el número de elementos
categories.forEach((category) => {
  // Obtener el título de la categoría (el texto dentro del tag <h2>)
  const categoryTitle = category.querySelector('h2').textContent;

  // Obtener todos los elementos li dentro de la categoría
  const categoryElements = category.querySelectorAll('li');

  // Contar el número de elementos en la categoría
  const numOfElements = categoryElements.length;

  // Mostrar el título y el número de elementos en la consola
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numOfElements}`);
});
