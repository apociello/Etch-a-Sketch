const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const gridBtn = document.querySelector('#grid')

document.addEventListener("dragstart", (e) => e.preventDefault());

let mouseDown = false;
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false)
nSquares(2)


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
        square.style.backgroundColor = 'blue'
    })

    square.addEventListener("mouseover", () => {
        if (mouseDown) {
            square.style.backgroundColor = 'blue'
        }
    })

    clear.addEventListener("click", () => {
        square.style.backgroundColor = 'white';
    })
})

}

gridBtn.addEventListener('click', () => {
    let num = prompt('Choose a number between 1 and 100');
    if (num < 1 || num > 100) return;
    nSquares(num);
    
})


