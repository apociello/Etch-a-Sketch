//Create 16*16(256) squares

const container = document.querySelector('#container')



for (let i=0; i<256; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = ''
    container.appendChild(div)
}

const squares = document.querySelectorAll(".box")
console.log(squares)
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'blue'
    })
})