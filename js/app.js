"use strict"

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems из app.js и 
//предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. 
// Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.



const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//====создание галереи изображений============
const galleryContainer = document.querySelector('.js-gallery');
  //console.log(galleryContainer);
const galleryItemsMarkup = createGalleryItem(galleryItems);
const lightboxRef = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxClose = document.querySelector('button[data-action="close-lightbox"]');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
  //console.log(galleryContainer);

function createGalleryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link"
    href=${original}>
    <img class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
    />
    </a>
    </li>
    `
  }).join('');
};

//========Реализация делегирования на галерее ul.js-gallery 
//и получение url большого изображения.==================
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault()
    //console.log('onGalleryContainerClick')
  if (event.target.nodeName !== "IMG") {
    return;
  }
      //console.log(event.target);
      //console.log(event.target.dataset.source);
  lightboxRef.classList.add('is-open')
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;
      //console.log(lightboxImage);
};


//====== close modal window =========
lightboxClose.addEventListener('click', overlayWindowClose);
function overlayWindowClose() {
  lightboxRef.classList.remove('is-open');
  lightboxImage.src = '#';
  lightboxImage.alt = '';
    //console.log(lightboxImage);
};

lightboxRef.addEventListener('click', overlayWindowsCloseByMouse);
function overlayWindowsCloseByMouse(event) {
  let result = new MouseEvent('event', {
  });
  lightboxRef.classList.remove('is-open')
};

document.addEventListener('keydown', overlayWindowCloseByEsc)
function overlayWindowCloseByEsc(event) {
  
  if (event.key === 'Escape')
      //console.log(event.key);  
    lightboxRef.classList.remove('is-open')
};

//Стартовые файлы===========================================================
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле app.js есть массив galleryItems, который содержит объекты с информацией о изображениях:
//маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, 
//и указываться в href ссылки(это необходимо для доступности).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>

// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".