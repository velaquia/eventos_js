"use strict";

const select = document.querySelector('select');
// Usamos "html" para seleccionar el padre de todos los
// elementos, es decir, el html en si.
const html = document.querySelector('html');

console.log("Evento de onclick con on-event");

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
 
select.onchange = () => {
    select.value === 'black' ? update('black','white') : update('white','black');
}

