const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const scoreElement = document.querySelector('.score');
const gameOverModal = document.getElementById('gameOver');
const finalScoreElement = document.getElementById('finalScore');
ctx.font = '24px Arial';

let score = 0;

const snake = [{
    x: 2,
    y: 1,
    show: function () {
        ctx.fillText('🐈‍⬛', this.x * 20, this.y * 20);
    }
},
{
    x: 1,
    y: 1,
    show: function () {
        ctx.fillText('🐈‍⬛', this.x * 20, this.y * 20);
    }
},
{
    x: 0,
    y: 1,
    show: function () {
        ctx.fillText('🐈‍⬛', this.x * 20, this.y * 20);
    }
}];

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('🐭', this.x * 20, this.y * 20);
    },
    fadeIn: function () {
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20);
    }
};

function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.fadeIn();
        snake.push({ ...snake[snake.length - 1] });
        score++;
        updateScore();
    }
}

function nextMove(x, y) {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }
    snake[0].x = x;
    snake[0].y = y;
}

function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function updateScore() {
    scoreElement.innerText = `Puntaje: ${score}`;
}

let x = 0;
let y = 1;
let direction = 1;

food.fadeIn();
const gameLoop = setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    nextMove(x, y);

    food.show();
    snake.forEach(s => s.show());

    eat();

    if (checkCollision()) {
        clearInterval(gameLoop);
        showGameOver();
    }

    // Actualizar la posición de la serpiente según la dirección
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    // Validar límites
    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 19) y = 0;
    else if (y < 0) y = 19;

}, 100);

document.querySelector('body').addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'd') direction = 1;
    else if (e.key === 'ArrowDown' || e.key === 's') direction = 2;
    else if (e.key === 'ArrowLeft' || e.key === 'a') direction = 3;
    else if (e.key === 'ArrowUp' || e.key === 'w') direction = 4;
});

function showGameOver() {
    finalScoreElement.innerText = `Tu puntaje fue: ${score}`;
    gameOverModal.style.display = 'block';
}

function tryAgain() {
    document.location.reload();
}
