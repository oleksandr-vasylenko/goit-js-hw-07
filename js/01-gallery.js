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
  picList: document.querySelector(".gallery"),
};

const render = () => {
  const list = galleryItems.map((item) => picTemplate(item)).join("");

  // refs.picList.innerHTML = "";
  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();
