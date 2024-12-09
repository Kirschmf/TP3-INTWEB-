const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;

function dark() {
  body.classList.add("dark-mode");
}

darkModeButton.addEventListener("click", dark);

const nav = document.querySelector("nav");
const imagem = document.createElement("img");

imagem.src = "wf3wv9rjmk6xytz422pw_400x400.jpeg";
imagem.alt = "imagem";
imagem.title = "Imagem de destaque";

nav.insertAdjacentElement("afterend", imagem);

const footer = document.querySelector("footer");
const navs = document.querySelectorAll("nav ul li a");
const list = document.createElement("ul");

navs.forEach((link) => {
  const listItem = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.textContent;
  listItem.appendChild(a);
  list.appendChild(listItem);
});

footer.appendChild(list);

const user = {
  name: prompt("Qual seu nome ?"),
};
const section = document.querySelector("main section");
const message = document.createElement("p");

message.textContent = `Bem vindo(a) ${user.name}`;

section.appendChild(message);

const table = document.createElement("table");

table.innerHTML = `
<thead>
<tr>
  <td>Coluna 1</td>
  <td>Coluna 2</td>
  <td>Coluna 3</td>
  <td>Coluna 4</td>
</tr>
</thead>
<tbody>
<tr>
  <td>Linha 1</td>
  <td>Linha 1</td>
  <td>Linha 1</td>
  <td>Linha 1</td>
</tr>
<tr>
  <td>Linha 2</td>
  <td>Linha 2</td>
  <td>Linha 2</td>
  <td>Linha 2</td>
</tr>
</tbody>
`;

section.appendChild(table);
