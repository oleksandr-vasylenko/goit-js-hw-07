import { galleryItems } from "./gallery-items.js";
// Change code below this line

const picTemplate = ({ preview, original, description }) => `
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
  const list = galleryItems.map((item) => picTemplate(item)).join("");

  refs.picList.innerHTML = "";
  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();

const onImageClick = (e) => {
  if (e.target === e.currentTarget) return;

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
};

refs.picList.addEventListener("click", onImageClick);
