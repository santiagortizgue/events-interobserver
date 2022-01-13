class GalleryBlock {

    imageRef = {
        domEle: null,
        shownClass: "App__galleryItem--show",
        duration: 500,
        delay: 0
    };

    constructor(containerRef, id){
        this.containerRef = containerRef;
        this.id = id;

        this.createElements();
    }

    createElements = () => {
        this.imageRef.domEle = document.createElement("img");
        this.imageRef.domEle.setAttribute("class", "App__galleryItem");
        this.imageRef.domEle.src = "./src/img/gallery/0.jpg";

        this.ref = this.imageRef.domEle;

        this.containerRef.appendChild(this.imageRef.domEle);
    }

    triggerAnimation = () => {
        let first = this.imageRef.domEle.getBoundingClientRect();
        this.imageRef.domEle.classList.add(this.imageRef.shownClass);

        let last = this.imageRef.domEle.getBoundingClientRect();
        let invert = 0;

        this.imageRef.domEle.animate([
            {transform: `scale(${invert})`},
            {transform: 'scale(1)'}
        ], {
            duration: this.imageRef.duration,
        });
    }

    triggerAnimationOut = () => {
        this.imageRef.domEle.classList.remove(this.imageRef.shownClass);
    }
}