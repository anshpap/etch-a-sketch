const grid = document.getElementById('grid');
const numOfBoxesInRow = 16;
const boxSideLength = grid.clientHeight / numOfBoxesInRow;

//creates the grid
for (let i = 0; i < numOfBoxesInRow; i++) {
  for (let j = 0; j < numOfBoxesInRow; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('id', `${i},${j}`);
    box.style.width = `${boxSideLength}px`;
    box.style.height = `${boxSideLength}px`;
    grid.appendChild(box);
  }
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('pointerenter', changeBoxColor));

function changeBoxColor(e) {
  e.target.style.backgroundColor = 'yellow';
}