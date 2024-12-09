const imagem = document.getElementById("img");
const mensagem = document.getElementById("texto");

imagem.addEventListener("load", () => {
  imagem.style.border = "10px solid blue";

  mensagem.textContent = "Imagem carregada com sucesso!";
});
