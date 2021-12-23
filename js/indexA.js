const eventRef = document.querySelector(".App__event");

const titleRef = {
    domEle: document.querySelector(".App__eventTitle"),
    shownClass: "App__eventTitle--show",
    duration: 500,
    delay: 0
};

const imgRef = {
    domEle: document.querySelector(".App__eventImage"),
    shownClass: "App__eventImage--show",
    duration: 750,
    delay: 200
};

const dataRef = {
    domEle: document.querySelector(".App__eventData"),
    shownClass: "App__eventData--show",
    duration: 500,
    delay: 200
};

const linkRef = {
    domEle: document.querySelector(".App__eventLink"),
    shownClass: "App__eventLink--show",
    duration: 500,
    delay: 0
};

const calcInvert = (f, l) => {
    let x = f.x - l.x;
    let y = f.y - l.y;
    return {x, y};
}

const elementRefs = [titleRef, imgRef, dataRef, linkRef];

function triggerAnimation() {
    elementRefs.forEach((element)=>{
        let first = element.domEle.getBoundingClientRect();
        element.domEle.classList.add(element.shownClass);

        let last = element.domEle.getBoundingClientRect();
        let invert = calcInvert(first, last);

        element.domEle.animate([
            {transform: `translate(${invert.x}px, ${invert.y}px)`},
            {transform: 'translate(0, 0)'}
        ], {
            duration: element.duration,
        });
    });
}

function triggerAnimationOut() {
    elementRefs.forEach((element)=>{
        element.domEle.classList.remove(element.shownClass);
    });
}

const options = {
    rootMargin: '0%',
    threshold: 0.25
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            triggerAnimation();
        }else{
            triggerAnimationOut();
        }
    });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(eventRef);