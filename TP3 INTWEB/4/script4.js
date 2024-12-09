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
