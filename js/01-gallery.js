import { galleryItems } from "./gallery-items.js";

// Change code below this line

const getImageTemplate = ({ preview, original, description }) => `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;

const refs = {
  picList: document.querySelector("div.gallery"),
};

const render = () => {
  const list = galleryItems.map((item) => getImageTemplate(item)).join("");

  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();

const onImageClick = (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) return;

  modalActions(e);
};

const modalActions = (e) => {
  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener("keydown", onEscape);

  function onEscape(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscape);
    }
  }
};

refs.picList.addEventListener("click", onImageClick);
