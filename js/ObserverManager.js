class ObserverManager{

    constructor(rootMargin, threshold){
        this.eventsList = [];

        this.config = {
            rootMargin,
            threshold
        };

        this.observer = new IntersectionObserver(this.callback, this.config);
    }

    getInstance(){
        return this;
    }

    callback = (entries, observer) => {
        entries.forEach((entry) => {
            // performance issue here
            // need to filter which dom element is intersecting and trigger the animation of that element
            let entryRef = this.eventsList.filter(element => element.ref === entry.target)[0];
            //
            if (entry.isIntersecting) {
                entryRef.triggerAnimation();
            }else{
                entryRef.triggerAnimationOut();
            }
        });
    }

    observe = (element) => {
        this.eventsList.push(element);
        this.observer.observe(element.ref);
    }
}

const singletonObserver = Object.freeze(new ObserverManager('20% 0px 20% 0px', 0.5));