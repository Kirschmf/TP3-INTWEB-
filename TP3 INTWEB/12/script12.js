const caixinhas = document.querySelectorAll('.caixinha');

const containers = document.querySelectorAll('.container');

caixinhas.forEach(caixinha => {
  caixinha.addEventListener('dragstart', dragStart);
});

containers.forEach(container => {
  container.addEventListener('dragover', dragOver);
  container.addEventListener('drop', drop);
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.className);
}

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