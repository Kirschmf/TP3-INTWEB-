const botao = document.getElementById("adicionarItem");
const lista = document.getElementById("lista");

let contadorItem = 0;

botao.addEventListener("click", () => {
  contadorItem++;

  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo item";

  lista.appendChild(novoItem);

  if (contadorItem === 10) {
    alert("Novo item 10 criado");
  }
});
