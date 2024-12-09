const criarButton = document.getElementById('criar');
const novoContainer = document.getElementById('novo');

const cores = ['corVerde', 'corRoxa', 'corLaranja', 'corVermelha'];

criarButton.addEventListener('click', criarCaixinha);

function criarCaixinha() {
  const novaCaixinha = document.createElement('div');
  
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  novaCaixinha.className = `caixinha ${corAleatoria}`;
  novaCaixinha.draggable = true;
  
  novaCaixinha.addEventListener('dragstart', dragStart);
  
  novoContainer.appendChild(novaCaixinha);
}

const containers = document.querySelectorAll('.container');

containers.forEach(container => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('drop', drop);
});

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  
  const className = event.dataTransfer.getData('text/plain');
  
  const newElement = document.createElement('div');
  newElement.className = className;
  newElement.draggable = true; 
  
  event.target.appendChild(newElement);
  
  newElement.addEventListener('dragstart', dragStart);
}

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.className);
}