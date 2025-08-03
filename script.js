function makeGrid(size) {
    let container = document.querySelector(".container");
    for (let i = 1; i <= size; i++) {
        let col = document.createElement("div");
        col.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid black"
            col.appendChild(row);
        }
        container.appendChild(col);
    }
}
 
function hover() {
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => {
        row.addEventListener("mouseover", () => row.style.backgroundColor = 'black');
    });
}

makeGrid(16);
hover();