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
	link: document.querySelector('.gallery__link'),
}

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

const galleryCreator = (gallery) => {
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
document.querySelector('.gallery__link').addEventListener('click', (e) => e.preventDefault)
const closeModal = (e) => {
	if (e.key === 'Escape') {
		instance.close()
		return window.removeEventListener('keydown', closeModal)
	}
}
const galleryView = (e) => {
	if (e.target === e.currentTarget) {
		return
	}
	e.target.preventDefault
	const theItem = galleryItems.find(({ description }) => description === e.target.alt)
	refs.source.src = theItem.original
	window.addEventListener('keydown', closeModal)
	return instance.show()
}
refs.gallery.addEventListener('click', galleryView)
