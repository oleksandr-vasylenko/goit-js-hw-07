import { galleryItems } from "./gallery-items.js";

// Change code below this line

const imgTemplate = ({ preview, original, description }) => `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
</li>
`;

const refs = {
  picList: document.querySelector(".gallery"),
};

const render = () => {
  const list = galleryItems.map((item) => imgTemplate(item)).join("");
  refs.picList.insertAdjacentHTML("beforeend", list);
};
render();

const onImageClick = (e) => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

refs.picList.addEventListener("click", onImageClick);
