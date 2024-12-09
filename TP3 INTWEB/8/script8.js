const draggables = document.querySelectorAll(".draggable");
const areas = document.querySelectorAll(".area");

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
