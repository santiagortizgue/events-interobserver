const containerRef = document.querySelector('.App__events');

let eventsList = [];
let eventsData = [
    {
        title: 'eSports Club: KOI',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 0
    },{
        title: 'Founder: Ibai',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 1
    },{
        title: 'Founder: Gerard Piqué',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 2
    },{
        title: 'Rafitta',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 3
    },{
        title: 'Koldo',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 4
    },{
        title: 'Plasma',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 5
    },{
        title: 'Enzo',
        data: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius itaque rerum, ad dolor id earum corrupti nemo? Illo inventore, error molestias, tempora suscipit, at distinctio tenetur optio impedit quis itaque?',
        id: 6
    }
];

const options = {
    rootMargin: '20% 0px 20% 0px',
    threshold: 0.5
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        // performance issue here
        // need to filter which dom element is intersecting and trigger the animation of that element
        let entryRef = eventsList.filter(element => element.eventRef === entry.target)[0];
        //
        if (entry.isIntersecting) {
            entryRef.triggerAnimation();
        }else{
            entryRef.triggerAnimationOut();
        }
    });
};

let observer = new IntersectionObserver(callback, options);

eventsData.forEach((event)=>{
    let newEvent = new EventBlock(containerRef, event.title, event.id, event.data, "#");
    eventsList.push(newEvent);
    observer.observe(newEvent.eventRef);
});