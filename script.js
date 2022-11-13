function createGrid(size) {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.style.border = "1px solid black";
            square.addEventListener('mouseover', changeColor);
            container.appendChild(square);
        }
    }
}

createGrid(16);

function changeColor() {
    this.style.backgroundColor = "#175a84";
}