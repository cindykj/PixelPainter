//creating grid in container

const bodyBox = document.getElementById('pixelPainter');

const swatchBox = document.createElement('div');
swatchBox.id = 'swatch';
bodyBox.appendChild(swatchBox);

const gridBox = document.createElement('div');
gridBox.id = 'grid';
bodyBox.appendChild(gridBox);

const swatchColor = ['#7FFFD4', '#0000FF', '#8A2BE2'];
const blanco = '#FFFFFF';
let storedColor;

let mouseIsDown = false; 

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
      cell.addEventListener('click', colorPicker);
      row.appendChild(cell);

    }
  }
};

//make paint grid

function createGrid(x, y, parent, blanco) {
  let container = document.createElement('div');
  container.addEventListener('mousedown', function (event){
    mouseIsDown = true;
  });
  container.addEventListener('mouseup', function () {
    mouseIsDown = false;
  });
  parent.appendChild(container);

  let counter = 0;

  for (let i = 0; i < x; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    for (let j = 0; j < y; j++) {
      let cell = document.createElement('div');
      cell.className = 'paintCell';
      cell.style.backgroundColor = blanco;
      
      cell.addEventListener('mouseover', function (event) {
        console.log('mouseover', mouseIsDown, event.target)
        if (mouseIsDown) {
          clickPaint(event);
        }
      })
      cell.addEventListener('click', clickPaint); //click and paint
      row.appendChild(cell);
    }
  }
};

// Clear 

let clear = document.createElement('button');
clear.id = 'clear';
clear.innerHTML = 'Clear';
document.body.appendChild(clear);

clear.addEventListener('click', function () {
  let myGrid = document.querySelectorAll('.paintCell');
  for (let i = 0; i < myGrid.length; i++) {
    myGrid[i].style.backgroundColor = '#FFFFFF'
  }
})

// Erase

let erase = document.createElement('button');
erase.id = 'erase';
erase.innerHTML = 'Erase';
document.body.appendChild(erase);

erase.addEventListener('click', function () {
  storedColor = 'white'

});

//take clicked color and assign to variable
function colorPicker(event) {
  storedColor = event.target.style.backgroundColor;
}

//assign event listener to grid
function clickPaint(event) {
  event.target.style.backgroundColor = storedColor;
}

//Paint - click and drag
// function dragPaint(event) {
//   // let mouseDownOver = paintCell.addEventListener('mousedown') && paintCell.addEventListener('mouseover');
//   // let noClickPaint = clickPaint
//   if ( !== true) {



//   if (mouseIsDown === mouseIsDown && mouseIsOver === mouseIsOver);
//   event.target.style.backgroundColor = storedColor;
// }

createSwatchGrid(1, 3, swatchBox, swatchColor);
createGrid(8, 8, gridBox, blanco);















