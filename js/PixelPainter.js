//creating grid in container
// function grid(x) {
//   for (let rows = 0; rows < x; rows++) {
//     for (let columns = 0; columns < x; columns++);
//     };
//   }
// var btn = document.getElementById('btn');
// btn.addEventListener("click", function(event) {

const bodyBox = document.getElementById('pixelPainter');

const swatchBox = document.createElement('div');
swatchBox.id = 'swatch';
bodyBox.appendChild(swatchBox);

const gridBox = document.createElement('div');
gridBox.id = 'grid';
bodyBox.appendChild(gridBox);

function createGrid (x, y, parent) {
  // let container = document.createElement('div');
  // container.appendChild(gridBox);

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    gridBox.appendChild(row);

      for (let k = 0; k < y; k++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);

      }

  }

}
createGrid(50, 50, gridBox);
// createGrid(20, 20, swatchBox);











