class EventBlock {

    options = {
        rootMargin: '-10%',
        threshold: 0.25
    };

    titleRef = {
        domEle: null,
        shownClass: "App__eventTitle--show",
        duration: 500,
        delay: 0
    };

    imgRef = {
        domEle: null,
        shownClass: "App__eventImage--show",
        duration: 750,
        delay: 200
    };

    dataRef = {
        domEle: null,
        shownClass: "App__eventData--show",
        duration: 500,
        delay: 200
    };

    linkRef = {
        domEle: null,
        shownClass: "App__eventLink--show",
        duration: 500,
        delay: 0
    };

    constructor(containerRef, title, id, link){
        this.title = title;
        this.id = id;
        this.data = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?";
        this.link = link;
        this.containerRef = containerRef;

        this.createElements();

        this.elementRefs = [this.titleRef, this.imgRef, this.dataRef, this.linkRef];

        this.observer = new IntersectionObserver(this.callback, this.options);
        this.observer.observe(this.eventRef);
    }

    createElements = () => {
        //container
        this.eventRef = document.createElement("section");
        this.eventRef.setAttribute("class", "App__event");
        //title
        this.titleRef.domEle = document.createElement("h3");
        this.titleRef.domEle.setAttribute("class", "App__eventTitle");
        this.titleRef.domEle.innerHTML = this.title;
        //img
        this.imgRef.domEle = document.createElement("img");
        this.imgRef.domEle.setAttribute("class", "App__eventImage");
        this.imgRef.domEle.src = './src/img/events/0.jpg';
        //data
        this.dataRef.domEle = document.createElement("p");
        this.dataRef.domEle.setAttribute("class", "App__eventData");
        this.dataRef.domEle.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?";
        //link
        this.linkRef.domEle = document.createElement("a");
        this.linkRef.domEle.setAttribute("class", "App__eventLink");
        this.linkRef.domEle.setAttribute("href", this.link);
        this.linkRef.domEle.innerHTML = "See more";

        //append elements to new event
        this.eventRef.appendChild(this.imgRef.domEle);
        this.eventRef.appendChild(this.titleRef.domEle);
        this.eventRef.appendChild(this.dataRef.domEle);
        this.eventRef.appendChild(this.linkRef.domEle);

        //append new event
        this.containerRef.appendChild(this.eventRef);
    }

    calcInvert = (f, l) => {
        let x = f.x - l.x;
        let y = f.y - l.y;
        return {x, y};
    }

    triggerAnimation = () => {
        this.elementRefs.forEach((element)=>{
            let first = element.domEle.getBoundingClientRect();
            element.domEle.classList.add(element.shownClass);

            let last = element.domEle.getBoundingClientRect();
            let invert = this.calcInvert(first, last);

            element.domEle.animate([
                {transform: `translate(${invert.x}px, ${invert.y}px)`},
                {transform: 'translate(0, 0)'}
            ], {
                duration: element.duration,
            });
        });
    }

    triggerAnimationOut = () => {
        this.elementRefs.forEach((element)=>{
            element.domEle.classList.remove(element.shownClass);
        });
    }

    callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.triggerAnimation();
            }else{
                this.triggerAnimationOut();
            }
        });
    };
}