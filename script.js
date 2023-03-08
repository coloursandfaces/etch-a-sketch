const container = document.getElementById("container");

function makeRows(rows, cols) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
  
makeRows(16, 16);



container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "orange";
})

const square = document.getElementById('square');

let answer = 0;
square.addEventListener('click', (event) => {
    answer = parseInt(prompt("Please input the number of squares on each side under 100"));
    while (Number.isNaN(answer) || answer > 100) {
        answer = parseInt(prompt("Invalid answer. Please input the number of squares on each side under 100."));
    }

    return makeRows(answer, answer);
})

