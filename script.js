//Create 16*16(256) squares

const container = document.querySelector('#container');
const clear = document.querySelector('#clear');



function nSquares(num) {
    total = num * num;
    const size = 500 / num;

    for (let i=0; i<total; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.classList.add("box");
        div.textContent = ''
        container.appendChild(div)
    }
}
nSquares(16)





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

