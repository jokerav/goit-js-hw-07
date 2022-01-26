import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
//console.log(galleryItems);

createGalleryMarkup();

function createGalleryMarkup() {
  galleryItems.map((img) => {
    gallery.insertAdjacentHTML(
      "beforeend",
      `
    <div class="gallery__item">
      <a class="gallery__link" href=${img.original}>
        <img
          class="gallery__image"
          src=${img.preview}
          data-source=${img.original}
          alt=${img.description}
        />
      </a>
    </div>`
    );
  });
}
