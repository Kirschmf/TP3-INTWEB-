const table = document.getElementById("table").querySelector("tbody");
const remove = document.getElementById("remove");
const message = document.getElementById("message");

function removeRow() {
  const removeFirstRow = table.querySelector("tr");

  if (removeFirstRow) {
    table.removeChild(removeFirstRow);
  } else {
    message.textContent = "Não há mais linhas para remover";
  }
}

remove.addEventListener("click", removeRow);
