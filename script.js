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
      "mouseover",
      () => (row.style.backgroundColor = "black")
    );
  });
}

function boxNums() {
  let btn = document.querySelector("#btnOfNums");
  btn.addEventListener("click", () => {
    let num = prompt("Enter the number of squares per side (1-100)");
    makeGrid(num);
    hover();
  });
}

makeGrid(16);
hover();
boxNums();
