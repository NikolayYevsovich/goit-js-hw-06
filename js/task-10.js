function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 20;

const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const allBoxes = document.querySelector("#boxes");

createButton.addEventListener("click", onClickCreate);
function onClickCreate() {
  const value = inputEl.value;
  allBoxes.innerHTML = "";
  size = 20;
  createBoxes(value);
}

function createBoxes(amount) {
  const box = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.background = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = size + "px";
    box.append(div);
  }
  allBoxes.append(box);
}
destroyButton.addEventListener("click", onDestroyButton);

function onDestroyButton() {
  allBoxes.innerHTML = "";
  inputEl.value = "";
}
