const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 287; // Posición x del cuadrado
let y = 198; // Posición y del cuadrado
let width = 6; // Tamaño inicial del cuadrado
let height = 4;
let crece = true;
// Variable para controlar el crecimiento

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ctx.fillStyle = `hsl(${height}, 50%, 50%)`; // Color en función del tamaño
    ctx.fillRect(x, y, width, height);

    // Actualizar tamaño dependiendo de crece
    if (crece) {
        width += 6;
        x -= 3;
        height += 4;
        y -= 2;
    } else {
        width -= 6;
        x += 3;
        height -= 4;
        y += 2;
    }

    // Cambiar la posición del cuadrado para que se mueva
    crece = width >= 600 ? !crece : crece;
    crece = width < 3 ? !crece : crece;
}, 50);
