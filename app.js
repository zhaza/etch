const container = document.querySelector("main");

for (let i = 0; i <= 16*16-1; i++) {
    const square = document.createElement("div");
    square.textContent = i;
    square.classList.add("square");
    container.appendChild(square);
}

const divs = document.querySelectorAll("div");
const classes = divs.classList;

divs.forEach((div) => {
    div.addEventListener("mouseover", event => {
        div.style.backgroundColor = "rgba(0, 0, 0, .5)";
    })
    div.addEventListener("mouseout", event => {
        div.style.backgroundColor = "white";
    })
    div.addEventListener("click", function() {
        const result = classes.toggle("c");
        if (result) {
        div.textContent = "X";
        } else {
        div.textContent = "O";
        }
    });
});
  

  


