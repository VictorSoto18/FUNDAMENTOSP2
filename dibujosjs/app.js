const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


// Montañas
ctx.fillStyle = 'gray';
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(100, 90);
ctx.lineTo(300, 400);
ctx.closePath();
ctx.fill();

//Sol
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(50, 50, 40, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
//pasto
ctx.fillStyle = 'green';
ctx.fillRect(1, 300, 600, 50);

// Base casita
ctx.fillStyle = 'purple';
ctx.fillRect(200, 150, 300, 200);
ctx.strokeStyle = 'black';
ctx.strokeRect(200, 150, 300, 200);

// Techo
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(350, 50);
ctx.lineTo(500, 150);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Chimenea
ctx.fillStyle = 'saddlebrown';
ctx.fillRect(230, 100, 20, 50);
ctx.strokeRect(230, 100, 20, 50);

// Humo
ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(240, 90, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(246, 80, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'lightgray';
ctx.beginPath();
ctx.arc(250, 70, 10, 0, Math.PI * 2, true);
ctx.fill();

//Puerta
ctx.fillStyle = 'brown';
ctx.fillRect(300, 250, 60, 100);
ctx.strokeRect(300, 250, 60, 100);


//Ventanas
ctx.fillStyle = 'lightblue';
ctx.fillRect(230, 200, 50, 50);
ctx.strokeRect(230, 200, 50, 50);


ctx.fillStyle = 'lightblue';
ctx.fillRect(420, 200, 50, 50);
ctx.strokeRect(420, 200, 50, 50);


// ARBOL
ctx.fillStyle = 'saddlebrown';
ctx.fillRect(550, 240, 20, 60);

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(560, 200, 40, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'saddlebrown';
ctx.fillRect(100, 200, 20, 100);

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(110, 160, 40, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'saddlebrown';
ctx.fillRect(20, 250, 20, 100);

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(33, 220, 40, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'saddlebrown';
ctx.fillRect(300, 250, 20, 100);

ctx.fillStyle = 'saddlebrown';
ctx.fillRect(340, 250, 20, 100);

ctx.fillStyle = 'saddlebrown';
ctx.fillRect(0, 350, 600, 90);

ctx.fillStyle = 'lightgreen';
ctx.fillRect(548, 310, 5, 40);


ctx.fillStyle = 'gray';

ctx.fillRect(489, 152, 10, 197);
ctx.fillStyle = 'gray';
ctx.fillRect(201, 152, 10, 197);

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(33, 220, 40, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

// Nubes
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(150, 80, 35, 0, Math.PI * 2, true);
ctx.arc(185, 80, 35, 0, Math.PI * 2, true);
ctx.arc(160, 50, 35, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(400, 60, 35, 0, Math.PI * 2, true);
ctx.arc(435, 60, 35, 0, Math.PI * 2, true);
ctx.arc(410, 40, 35, 0, Math.PI * 2, true);
ctx.fill();

// Flores
ctx.fillStyle = 'pink';
ctx.beginPath();
ctx.arc(550, 310, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(560, 320, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(544, 320, 10, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'Black';
ctx.beginPath();
ctx.arc(350, 310, 4, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke();

// Coche
ctx.fillStyle = 'blue';
ctx.fillRect(100, 310, 80, 30);
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(120, 340, 10, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.arc(160, 340, 10, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'gray';
ctx.fillRect(110, 290, 30, 20);