import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createMarkupItems(galleryItems));

galleryList.addEventListener("click", handlerClickCard);

function handlerClickCard(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) return;

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();
}

console.log(galleryItems);
