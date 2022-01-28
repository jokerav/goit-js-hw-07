import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
createGalleryMarkup();
gallery.addEventListener("click", onImageClick);

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
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName != "IMG") {
    return;
  }
  showModalImage(e);
}
function showModalImage(e) {
  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`);
  instance.show(() => gallery.addEventListener("keydown", onEsc));

  function onEsc(event) {
    //console.log(event);
    if (event.code != "Escape") {
      return;
    }
    instance.close(() => {
      gallery.removeEventListener("keydown", onEsc);
    });
  }
}
