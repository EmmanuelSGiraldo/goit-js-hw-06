"use strict";

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const email = form.elements.email.value.trim(); // Obtiene el valor del input de email y lo limpia de espacios en blanco
  const password = form.elements.password.value.trim(); // Obtiene el valor del input de password y lo limpia de espacios en blanco

  if (!email || !password) { // Verifica si algún campo está en blanco
    alert('Todos los espacios deben ser rellenados');
    return; // Detiene la ejecución del script
  }

  const data = { email, password }; // Crea un objeto con los valores de los campos de formulario

  console.log(data); // Muestra el objeto en la consola
  form.reset(); // Borra los valores de los campos del formulario
});
