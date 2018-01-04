//creating grid in container


const bodyBox = document.getElementById('pixelPainter');

const swatchBox = document.createElement('div');
swatchBox.id = 'swatch';
bodyBox.appendChild(swatchBox);

const gridBox = document.createElement('div');
gridBox.id = 'grid';
bodyBox.appendChild(gridBox);

function createGrid (x, y, parent) {
  let container = document.createElement('div');
  parent.appendChild(container);

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    parent.appendChild(row);

      for (let j = 0; j < y; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);

      }
  }
}
createGrid(50, 50, gridBox);
createGrid(10, 10, swatchBox);











