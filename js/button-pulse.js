const buttons = document.querySelectorAll("button");

function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
}

function addRemovePulse(button) {
    button.classList.add("pulse");
    button.addEventListener("animationend", () => {
        button.classList.remove("pulse");
    });
}

for (let button of buttons) {
    button.addEventListener("click", (e) => {
        mousePositionToCustomProp(e, button);
        addRemovePulse(button);
    });
}