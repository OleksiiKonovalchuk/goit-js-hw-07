import { galleryItems } from './gallery-items.js'
// Change code below this line
const refs = {
	gallery: document.querySelector('.gallery'),
}
function galleryCreator(gallery) {
	const galleryToAdd = []
	gallery.map(({ preview, original, description }) => {
		const image = `
		<a class="gallery__item" href="${original}"> 
		  <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
		</a>
		`
		galleryToAdd.push(image)
	})

	return refs.gallery.insertAdjacentHTML('afterbegin', galleryToAdd.join(''))
}
galleryCreator(galleryItems)

refs.gallery.addEventListener('click', onGalleryClick)
function onGalleryClick(e) {
	e.preventDefault()
}
let gallery = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	swipeClose: false,
})

// gallery.on('show.simplelightbox', function () {
// 	// do something…
// })

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e) // some usefull information
// })
