import { galleryItems } from "./gallery-items.js";

// Change code below this line

const picTemplate = ({ preview, original, description }) => `
<li>
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
    </a>
</li>
`;

const refs = {
  picList: document.querySelector(".gallery"),
};

const render = () => {
  const list = galleryItems.map((item) => picTemplate(item)).join("");
  refs.picList.insertAdjacentHTML("beforeend", list);
};

render();

const onImageClick = (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });
};

refs.picList.addEventListener("click", onImageClick);
