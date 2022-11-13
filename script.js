const container = document.querySelector('.container');
let square;

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const squares = container.querySelectorAll('div');
    squares.forEach(squareDiv => squareDiv.remove());

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            square = document.createElement('div');
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

const sizeBtn = document.querySelector('.size');
sizeBtn.addEventListener('click', changeSize);

function changeSize() {
    const size = prompt('Size? Should be at least 2, but not bigger than 100');
    if (size >= 2 && size <= 100) {
        createGrid(size);
    } else {
        console.log("The size should be at least 2 and not bigger than 100");
    }
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);

function resetGrid() {
    const squares = document.querySelectorAll('div');
    squares.forEach(squareDiv => {
        squareDiv.style.backgroundColor = "white";
    });
}