const container = document.querySelector('#container');
const gridBtn = document.querySelector('#grid');
const rainbowBtn = document.querySelector('#rainbow');
const colorBtn = document.querySelector('#color');
const eraserBtn = document.querySelector('#eraser');
const clear = document.querySelector('#clear');


document.addEventListener("dragstart", (e) => e.preventDefault());

let mouseDown = false;
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false)
nSquares(16)

let color = true;
let rainbow = false;
let eraser = false;

rainbowBtn.addEventListener('click', () => {
    color = false;
    rainbow = true;
    eraser = false;
})

colorBtn.addEventListener('click', () => {
    color = true;
    rainbow = false;
    eraser = false;
})

eraserBtn.addEventListener('click', () => {
    color = false;
    rainbow = false;
    eraser = true
})

gridBtn.addEventListener('click', () => {
    let num = prompt('Choose a number between 1 and 100');
    if (num < 1 || num > 100) return;
    nSquares(num);
    
})

clear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".box")
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})

function nSquares(num) {
    const total = num * num;
    const size = 500 / num;

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    for (let i=0; i<total; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.classList.add("box");
        div.textContent = ''
        container.appendChild(div)
    }

    const squares = document.querySelectorAll(".box")
    squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (color) {
            square.style.backgroundColor = 'black'
        } else if (rainbow) {
            square.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
        } else {
            square.style.backgroundColor = 'white'
        }
    })

    square.addEventListener("mouseover", () => {
        if (mouseDown) {
            if (color) {
                square.style.backgroundColor = 'black'
            } else if (rainbow) {
                square.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
            } else {
                square.style.backgroundColor = 'white'
            }
        }
    })
})

}

function randomNumber() {
    return Math.floor(Math.random() * 256)
}