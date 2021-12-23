
const titleRef = {
    domEle: document.querySelector(".App__eventTitle"),
    shownClass: "App__eventTitle--show",
    duration: 750,
    delay: 0
};

const imgRef = {
    domEle: document.querySelector(".App__eventImage"),
    shownClass: "App__eventImage--show",
    duration: 1000,
    delay: 200
};

const dataRef = {
    domEle: document.querySelector(".App__eventData"),
    shownClass: "App__eventData--show",
    duration: 750,
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

function triggerAnimation(element) {
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
}

function triggerAnimationOut(element) {
    //let first = element.domEle.getBoundingClientRect();
    element.domEle.classList.remove(element.shownClass);
    /*
    let last = element.domEle.getBoundingClientRect();
    let invert = calcInvert(first, last);

    console.log(invert);

    element.domEle.animate([
        {transform: `translate(${invert.x}px, ${invert.y}px)`},
        {transform: 'translate(0, 0)'}
    ], {
        duration: element.duration,
    });*/
}

const elementOptions = {
    rootMargin: '10%',
    threshold: 0.25
};

const imageOptions = {
    rootMargin: '50%',
    threshold: 0
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        //console.log("New Entry", entry.target, entry.isIntersecting);
        let entryRef = elementRefs.filter(element => element.domEle === entry.target)[0];
        if (entry.isIntersecting) {
            triggerAnimation(entryRef);
        }else{
        //escape animations
        triggerAnimationOut(entryRef);
        }
    });
};

let elementsObserver = new IntersectionObserver(callback, elementOptions);
let imageObserver = new IntersectionObserver(callback, imageOptions);

elementRefs.forEach((element)=>{
    if(element.domEle.tagName !== 'IMG'){
        elementsObserver.observe(element.domEle);
    }else{
        imageObserver.observe(element.domEle);
    }
});