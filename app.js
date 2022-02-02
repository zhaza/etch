const container = document.querySelector(".container");

for (let i = 0; i <= 16*16-1; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
};

const divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", event => {
        div.style.backgroundColor = "rgba(0, 0, 0)";
    });
});

