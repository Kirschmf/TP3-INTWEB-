const draggables = document.querySelectorAll(".draggable");
const areas = document.querySelectorAll(".area");
const reset = document.getElementById("resetar");
const sourceArea = document.getElementById("areaOrigem");
const destinationArea = document.getElementById("areaDestino");
const counter = document.getElementById("contador");

let clickcount = 0;

draggables.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id", e.target.id);
  });
});

areas.forEach((area) => {
  area.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  area.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
  });
});

reset.addEventListener("click", () => {
  const itemsToReset = Array.from(destinationArea.children);

  itemsToReset.forEach((item) => {
    sourceArea.appendChild(item);
  });

  clickcount++;
  counter.textContent = `Você clicou ${clickcount} vezes`;
});
