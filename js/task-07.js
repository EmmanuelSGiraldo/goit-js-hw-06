"use strict";

const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

// Agrega un event listener al input para detectar cuando cambie su valor
fontSizeControl.addEventListener('input', () => {
  // Obtiene el valor actual del input
  const fontSize = fontSizeControl.value;
  
  // Actualiza el estilo inline del span con el nuevo tamaño de fuente
  text.style.fontSize = `${fontSize}px`;
});
