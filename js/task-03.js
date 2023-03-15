"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.querySelector('.gallery');

// Creamos una función para insertar los elementos de la galería en el DOM con insertAdjacentHTML()
const insertGallery = () => {
  const gallery = images.map((image, index) => {
    const angle = (index + 1) * 15; // Calculamos el ángulo de rotación
    return `<li style="transform: rotate(${angle}deg)"><img src="${image.url}" alt="${image.alt}" height="210"></li>`;
  }).join("");
  listGallery.insertAdjacentHTML("afterbegin", gallery);
};

// Llamamos a la función insertGallery()
insertGallery();

// Agregamos algunos estilos CSS para darle un diseño mínimo a la galería.
listGallery.style.listStyle = "none";
listGallery.style.display = "flex";
listGallery.style.gap = "30px";
listGallery.style.justifyContent = "center";
listGallery.style.alignItems = "center";
listGallery.style.position = "absolute";
listGallery.style.top = "50%";
listGallery.style.left = "50%";
listGallery.style.transform = "translate(-50%, -50%)";

// Agregamos animaciones CSS.
const imagesList = document.querySelectorAll('.gallery li');
imagesList.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.querySelector('img').style.transform = 'scale(1.1)';
    image.querySelector('img').style.transition = 'all 0.3s ease-in-out';
    image.style.zIndex = '1'; // Hacemos que la imagen que se agranda tenga un índice z mayor para que aparezca por encima de las demás.
  });
  image.addEventListener('mouseout', () => {
    image.querySelector('img').style.transform = 'scale(1)';
    image.querySelector('img').style.transition = 'all 0.3s ease-in-out';
    image.style.zIndex = '0'; // Devolvemos el índice z a su valor original cuando se saca el mouse de la imagen.
  });
});

