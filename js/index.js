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

let MAX_EVENTS = 7;

const options = {
    rootMargin: '20% 0px 20% 0px',
    threshold: 0.5
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

for (let index = 0; index < eventsData.length; index++) {
    let info = eventsData[index];

    let newEvent = new EventBlock(containerRef, info.title, info.id, info.data, "#");
    observer.observe(newEvent.eventRef);
    eventsList.push(newEvent);
}