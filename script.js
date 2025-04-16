//Create 16*16(256) squares

const container = document.querySelector('#container')



for (let i=0; i<256; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = 'X'
    container.appendChild(div)
}


