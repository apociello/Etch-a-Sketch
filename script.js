//Create 16*16(256) squares

const container = document.querySelector('#container');
const clear = document.querySelector('#clear');


for (let i=0; i<256; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = ''
    container.appendChild(div)
}

let mouseDown = false;
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false)

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

