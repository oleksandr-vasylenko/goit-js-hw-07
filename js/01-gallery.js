import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

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

// console.log(picTemplate);

const refs = {
  picList: document.querySelector("div.gallery"),
};

// console.log(refs.picList);

const render = () => {
  const list = galleryItems.map((item) => picTemplate(item)).join("");

  refs.picList.innerHTML = "";
  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();

const onImageClick = (e) => {
  // if (e.target === e.currentTarget) return;

  console.log(e);
  console.log(e.target);
  console.log(e.currentTarge);

  const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

  instance.show();
};

refs.picList.addEventListener("click", onImageClick);
