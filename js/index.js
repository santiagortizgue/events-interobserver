const containerRef = document.querySelector('.App__events');

let eventsList = [];
let MAX_EVENTS = 8;

const options = {
    rootMargin: '-10%',
    threshold: 0.25
};

callback = (entries, observer) => {
    entries.forEach((entry) => {
        let entryRef = eventsList.filter(element => element.eventRef === entry.target)[0];
        if (entry.isIntersecting) {
            entryRef.triggerAnimation();
        }else{
            entryRef.triggerAnimationOut();
        }
    });
};

let observer = new IntersectionObserver(callback, options);

for (let index = 0; index < MAX_EVENTS; index++) {
    let newEvent = new EventBlock(containerRef, `Evento #${index + 1}`, index, "#");
    observer.observe(newEvent.eventRef);
    eventsList.push(newEvent);
}