const body = document.querySelector('body');
const btnChange = document.getElementById('btnChange');

//  const changeColor = () => {
//      const color = prompt('Ingresa un color: ');
//      body.style.backgroundColor = color;
//  }
const changeColor = () => {
    const letras = '0123456789abcdf';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
}
btnChange.addEventListener('click', changeColor);



