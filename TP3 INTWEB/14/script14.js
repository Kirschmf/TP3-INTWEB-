const inputTexto = document.getElementById('texto');
const spanNome = document.getElementById('nome');

inputTexto.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        spanNome.textContent = inputTexto.value;
        inputTexto.value = '';
    }
});