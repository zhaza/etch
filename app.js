// clear button & create container
const main = document.querySelector("main");
const button = document.createElement("button");
button.textContent = "Clear";
const container = document.createElement("div")
container.classList.add("container");
main.appendChild(button);
main.appendChild(container);

//grid container 16x16 original
const conquery = document.querySelector(".container");
for (let i = 0; i <= 16*16-1; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid")
    conquery.appendChild(grid);
};

//hover to start coloring each div black
function hover() {
    const divs = document.querySelectorAll(".grid");
    
    divs.forEach((div) => {
        div.addEventListener("mouseover", event => {
            div.style.backgroundColor = "rgba(0, 0, 0)";
        })
    })
};
hover();

//clear function
function clear() {
    while (conquery.firstChild) {
        conquery.removeChild(conquery.firstChild);
    }
};

//grid resize function, based off user input
function resize() {
    const regrid = prompt("What size grid would you like? (e.g.'10')");
    if (regrid < 100) {
        for (let i = 0; i <= regrid*regrid-1; i++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            conquery.appendChild(grid);
        }  
        conquery.style.gridTemplateColumns = `repeat(${regrid}, minmax(10px, 1fr))`;
        conquery.style.gridTemplateRows = `repeat(${regrid}, minmax(10px, 1fr))`;
        hover();
    } else {
        alert("Try that again. Size that is under 100!");
        resize();
    }
    hover();
};

button.addEventListener("click", () => {
    clear();
    resize();
})

//prompt to generate new grid > limit 100
