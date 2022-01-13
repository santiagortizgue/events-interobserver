const containerRef = document.querySelector('.App__events');

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

eventsData.forEach((event)=>{
    let newEvent = new EventBlock(containerRef, event.title, event.id, event.data, "#");
    singletonObserver.observe(newEvent);
});

