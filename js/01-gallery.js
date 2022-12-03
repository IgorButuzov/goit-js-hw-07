import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onPictureClick);

const makePictures = picture => {
    const {preview, original, description} = picture
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img class="gallery__image" 
            src= '${preview}'
            data-source='${original}' 
            alt="'${description}'"/>
        </a>
    </div>`
};

const makeGallery = galleryItems.map(makePictures)
                                .join('');

gallery.insertAdjacentHTML('beforeend', makeGallery);

let currentModalPicture;
let currentModalDescription;

function onPictureClick(evt) {
    evt.preventDefault();

    const galleryEl = evt.target.classList.contains('gallery__image');

    if (!galleryEl) {
        return
    }
    
    currentModalPicture = evt.target.dataset.source;
    currentModalDescription = evt.target.alt;
    
    console.log(currentModalPicture);
    console.log(currentModalDescription);

    openModal();
}   

const openModal = () => {
    const instance = basicLightbox.create(`
    <img 
    src= '${currentModalPicture}'
    alt="'${currentModalDescription}'">
`)
    instance.show();
};
