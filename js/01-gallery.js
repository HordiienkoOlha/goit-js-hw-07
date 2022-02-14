import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Добавь закрытие модального окна по нажатию клавиши Escape. С
// делай так, чтобы прослушивание клавиатуры было только пока открыто
//  модальное окно.У библиотеки basicLightbox есть метод для
// программного закрытия модального окна.
const list = document.querySelector(".gallery");

const newList = galleryItems
  .map(
    (image) => `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", newList);

list.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();

  const sourseImage = evt.target.src;

  const instance = basicLightbox.create(`
    <img class="modal" src="${sourseImage}">
`);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.show();

  // const visible = instance.visible()
  
  // const galleryItem = document.querySelector(".gallery__item");
  // window.removeEventListener('keydown', onEscKeyPress);

}
// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//      instance.close();
//   }
// }