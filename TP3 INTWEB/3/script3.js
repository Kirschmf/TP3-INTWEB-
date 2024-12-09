const darkModeButton = document.getElementById("darkModeButton");
const body = document.body;

function dark() {
  body.classList.add("dark-mode");
}

darkModeButton.addEventListener("click", dark);
