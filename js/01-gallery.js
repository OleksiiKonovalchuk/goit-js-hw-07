import { galleryItems } from './gallery-items.js'
// Change code below this line
const instance = basicLightbox.create(`
    <div class="modal">
         <img src="" alt=""/>
    </div>
`)
const refs = {
	gallery: document.querySelector('.gallery'),
	source: instance.element().querySelector('img'),
}
function galleryCreator(gallery) {
	const galleryToAdd = []
	gallery.map(({ preview, original, description }) => {
		const image = `
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
		`
		galleryToAdd.push(image)
	})
	return refs.gallery.insertAdjacentHTML('afterbegin', galleryToAdd.join(''))
}
galleryCreator(galleryItems)
function closeModal(e) {
	if (e.code === 'Escape') {
		instance.close()
		return window.removeEventListener('keydown', closeModal)
	}
}
function galleryView(e) {
	e.preventDefault()
	if (e.target.nodeName !== 'IMG') {
		return
	}
	e.target.src = e.target.dataset.source
	refs.source.src = e.target.dataset.source
	refs.source.alt = e.target.alt
	window.addEventListener('keydown', closeModal)
	return instance.show()
}
refs.gallery.addEventListener('click', galleryView)

// const galleryCreator = (gallery) => {
// 	const galleryToAdd = []
// 	gallery.map(({ preview, description }) => {
// 		const image = `document.createElement('img')
// 		image.classList.add('gallery__image')
// 		image.alt = description
// 		image.src = preview`
// 		galleryToAdd.push(image)
// 	})
// 	refs.gallery.append(...galleryToAdd)
// }
