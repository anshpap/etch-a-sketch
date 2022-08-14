function createGrid(numOfBoxesInRow) {
  grid.innerHTML = '';

  let boxSideLength = grid.clientWidth / numOfBoxesInRow;

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

  addHoverEvent();
}

function changeBoxColor(e) {
  e.target.style.backgroundColor = 'yellow';
}

function changeGridSize() {
  numOfBoxesInRow = Number(prompt('Enter the number of boxes per side for the new grid (max. 100).'));
  if (!Number.isInteger(numOfBoxesInRow) || numOfBoxesInRow <= 0 || numOfBoxesInRow > 100) {
    alert('Input was not an integer between 1 and 100. Grid size not changed.');
    return;
  }

  createGrid(numOfBoxesInRow);
}

function addHoverEvent() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('pointerenter', changeBoxColor));
}

const grid = document.getElementById('grid');
const changeGridSizeBtn = document.getElementById('change-grid-size');

changeGridSizeBtn.addEventListener('click', changeGridSize);

createGrid(16);