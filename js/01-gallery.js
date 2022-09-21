import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picTemplate = () => `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
`;

const refs = {
  picList: document.querySelector("body"),
};

const render = () => {
  const list = galleryItems.map((item) => picTemplate(item).join());
  refs.picList.innerHTML = "";
  refs.picList.insertAdjacentHTML("beforeend', list);
};
