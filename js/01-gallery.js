import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItem = document.querySelector('.gallery__item')

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

gallery.insertAdjacentHTML('beforeend', makeGallery)

gallery.addEventListener('click', onPictureClick);

function onPictureClick(evt) {
    evt.preventDefault();
    const galleryEl = evt.target.classList.contains('gallery__image');
    if (!galleryEl) {
        return
    }
    let image = evt.target;
    console.log(image.dataset.source);
}   