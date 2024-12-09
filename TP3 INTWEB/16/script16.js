const lista = document.getElementById('lista');

lista.addEventListener('click', function() {
    const primeiroLi = lista.querySelector('li');

    primeiroLi.innerText = 'Amapá';

    primeiroLi.style.backgroundColor = 'blue';
});