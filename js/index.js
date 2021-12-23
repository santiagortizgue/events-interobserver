const containerRef = document.querySelector('.App__events');

for (let index = 0; index < 8; index++) {
    let newEvent = new EventBlock(containerRef, `Evento #${index + 1}`, index, "#");
}