//creating grid in container
function grid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++);
    };
  }
// var btn = document.getElementById('btn');
// btn.addEventListener("click", function(event) {

let gridElement = document.createElement('div');
gridElement.id = 'gridDiv';
gridElement.style.height = '10px';
gridElement.style.width = '10px';
gridElement.style.border = '1px solid blue';

let containerElem = document.getElementById('container');
containerElem.appendChild(gridElement);




