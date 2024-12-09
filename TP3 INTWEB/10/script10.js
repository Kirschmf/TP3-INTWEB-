const table = document.getElementById("table").querySelector("tbody");
const add = document.getElementById("add");

function addRow() {
  const newRow = document.createElement("tr");

  const rows = ["teste 3", "teste 3", "teste 3", "teste 3"];

  rows.forEach((text) => {
    const row = document.createElement("td");
    row.textContent = text;
    newRow.appendChild(row);
  });

  table.appendChild(newRow);
}

add.addEventListener("click", addRow);
