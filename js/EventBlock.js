class EventBlock {

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

    constructor(containerRef, title, id, data, link){
        this.title = title;
        this.id = id;
        this.data = data;
        this.link = link;
        this.containerRef = containerRef;

        this.createElements();

        this.elementRefs = [this.titleRef, this.imgRef, this.dataRef, this.linkRef];
    }

    createElements = () => {
        //event
        this.eventRef = document.createElement("section");
        this.eventRef.setAttribute("class", "App__event");
        //container
        this.eventContainerRef = document.createElement("div");
        this.eventContainerRef.setAttribute("class", "App__eventContainer");
        //title
        this.titleRef.domEle = document.createElement("h3");
        this.titleRef.domEle.setAttribute("class", "App__eventTitle");
        this.titleRef.domEle.innerHTML = this.title;
        //img
        this.imgRef.domEle = document.createElement("img");
        this.imgRef.domEle.setAttribute("class", "App__eventImage");
        this.imgRef.domEle.src = `./src/img/data/${this.id}.jpg`;
        //data
        this.dataRef.domEle = document.createElement("p");
        this.dataRef.domEle.setAttribute("class", "App__eventData");
        this.dataRef.domEle.innerHTML = this.data;
        //link
        this.linkRef.domEle = document.createElement("a");
        this.linkRef.domEle.setAttribute("class", "App__eventLink");
        this.linkRef.domEle.setAttribute("href", this.link);
        this.linkRef.domEle.innerHTML = "See more";

        //append elements to new event
        this.eventContainerRef.appendChild(this.imgRef.domEle);
        this.eventContainerRef.appendChild(this.titleRef.domEle);
        this.eventContainerRef.appendChild(this.dataRef.domEle);
        this.eventContainerRef.appendChild(this.linkRef.domEle);
        this.eventRef.appendChild(this.eventContainerRef);

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
}