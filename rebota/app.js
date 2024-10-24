const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function() {
        ctx.fillStyle = `hsl(${this.x}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
    }
};

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();
    // Validar el límite para cambiar la dirección horizontal
    if (x >= 590) {
        right = false;
    } else if (x <= 10) {
        right = true;
    }
    // Validar el límite para cambiar la dirección vertical
    if (y >= 390) {
        down = false;
    } else if (y <= 10) {
        down = true;
    }
    // Cambiar la posición de x y y según la dirección
    if (right) {
        x++;
    } else {
        x--;
    }
    if (down) {
        y++;
    } else {
        y--;
    }
},10);