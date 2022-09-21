import { galleryItems } from "./gallery-items.js";
// Change code below this line

const picTemplate = ({ preview, original, description }) => `
<div class="gallery__item">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
</div>
`;

const refs = {
  picList: document.querySelector("div.gallery"),
};

const render = () => {
  const list = galleryItems.map((item) => picTemplate(item)).join("");

  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();

const onImageClick = (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) return;

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
};

const onEscape = (e) => {
  if (e.code === "Escape") {
    console.log("need to figure out how to close with Escape");
  }
};

refs.picList.addEventListener("click", onImageClick);
document.addEventListener("keydown", onEscape);
