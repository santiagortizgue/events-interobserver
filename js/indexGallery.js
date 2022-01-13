const containerGalleryRef = document.querySelector('.App__galleryContainer');

let imageData = [{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}];

imageData.forEach((gallery)=>{
    let newImage = new GalleryBlock(containerGalleryRef, gallery.id);
    singletonObserver.observe(newImage);
});