//creating grid in container


const bodyBox = document.getElementById('pixelPainter');

const swatchBox = document.createElement('div');
swatchBox.id = 'swatch';
bodyBox.appendChild(swatchBox);

const gridBox = document.createElement('div');
gridBox.id = 'grid';
bodyBox.appendChild(gridBox);

const swatchColor = ['#FFFFFF', '#0000FF', '#8A2BE2'];
const blanco = '#0000FF';


//make swatch grid

function createSwatchGrid(x, y, parent, swatchColor) {
  let container = document.createElement('div');
  parent.appendChild(container);

  let counter = 0;

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    parent.appendChild(row);

    for (let j = 0; j < y; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.backgroundColor = swatchColor[counter++];
      row.appendChild(cell);

    }
  }
};

//make paint grid

function createGrid(x, y, parent, blanco) {
  let container = document.createElement('div');
  parent.appendChild(container);

  let counter = 0;

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    parent.appendChild(row);

    for (let j = 0; j < y; j++) {
      let cell = document.createElement('div');
      cell.className = 'paintCell';
      cell.style.backgroundColor = blanco;
      row.appendChild(cell);

    }
  }
};

// clear 
let clear = document.createElement('button');
clear.id = 'clear';
clear.innerHTML = 'Clear';
document.body.appendChild(clear);

clear.addEventListener('click', function() {
  console.log('clearing');
    let myGrid = document.querySelectorAll('.paintCell');
      for (let i = 0; i < myGrid.length; i++) {
        myGrid[i].style.backgroundColor = '#FFFFFF'
      }
    })
  
//color picker function 

//swatch.addEventListener('click', )


// function colorBg(e) {
//   if (e.target === 'cell') {
//     changeBgColor ('#fff', e.target);
//   }
// }
// gridBox.addEventListener('click', colorBg)


createSwatchGrid(1, 3, swatchBox, swatchColor);
createGrid(8, 8, gridBox, blanco);














