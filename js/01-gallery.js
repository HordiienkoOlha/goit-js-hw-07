import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 4. Открытие модального окна по клику на элементе галереи.
//      Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента < img > в модальном окне
//      перед открытием.Используй готовую разметку модального окна
//      с изображением из примеров библиотеки basicLightbox.
// Ссылка на оригинальное изображение должна храниться в data-атрибуте
//      source на элементе < img >, и указываться в href ссылки.Не добавляй
//      другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
// Обрати внимание на то, что изображение обернуто в ссылку,
// а значит при клике по умолчанию пользователь будет перенаправлен
// на другую страницу.Запрети это поведение по умолчанию.
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

  // const galleryItem = document.querySelector(".gallery__item");

  // if (evt.key === 'Escape') {
  //   modal.style.visibility = hidden;
  // }
}
