"use strict"

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. 
//Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryImagesEl = document.querySelector('#gallery');
galleryImagesEl.classList.add("gallery--flex");
//console.log(galleryImagesEl);


const imagesGalleryContainer = images => images.map(image => {
  galleryImagesEl.insertAdjacentHTML('beforeend', `<li class="gallery_item">
  <img src = ${image.url}
  alt = ${image.alt}
  width = "640">
  </li >`);
  
  return galleryImagesEl;
})

imagesGalleryContainer(images);

//=============================================================================
// const addImageToGallery = images => {
//   return images.map(image => {
//     const liEl = document.createElement('li');
//     const imageEl = document.createElement('img');
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     imageEl.width = 640;

//     liEl.append(imageEl);
//     return liEl;
//   });
// };

// const imagesAddedToGalery = addImageToGallery(images);
// console.log(imagesAddedToGalery);
// galleryImagesEl.append(imagesAddedToGalery);


// galleryImagesEl.insertAdjacentHTML('afterbegin', `<li>
// <img src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// alt = "White and Black Long Fur Cat"
// width = "640">
// </li >`);

// const imagesInGallery = images.map(image => {
//   const liEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 640;

//   liEl.append(imageEl);
//   console.log(liEl);
//   return liEl;
// });

// console.log(imagesInGallery);
// galleryImagesEl.append(imagesInGallery);