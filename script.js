function makeGrid(size) {
  let container = document.querySelector(".container");
  let cellSize = 600 / size;
  container.innerHTML = "";
  for (let i = 1; i <= size; i++) {
    let col = document.createElement("div");
    col.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "1px solid black";
      row.style.width = `${cellSize}px`;
      row.style.height = `${cellSize}px`;
      col.appendChild(row);
    }
    container.appendChild(col);
  }
}

function hover() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener(
      "mouseover", function () {
          let currentOpacity = parseFloat(row.style.opacity) || 0;        if (document.getElementById('black').checked) {
          row.style.backgroundColor = 'black';
          if (currentOpacity < 1) {
            row.style.opacity = (currentOpacity + 0.1).toFixed(1);
          }
        } else if (document.getElementById('rainbow').checked) {
          row.style.backgroundColor = getRandomColor();
        }
      }
    );
  });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function boxNums() {
  let btn = document.querySelector("#btnOfNums");
  btn.addEventListener("click", () => {
    let num = prompt("Enter the number of squares per side (1-100)");
    makeGrid(num);
    hover();
  });
}

function resetGrid() {
  let btn = document.getElementById('reset');
  let container = document.querySelector(".container");
  btn.addEventListener("click", () => {container.innerHTML = ''})
}

makeGrid(16);
hover();
boxNums();
resetGrid();