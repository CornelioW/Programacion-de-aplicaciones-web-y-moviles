// Agregar un evento de clic a un botón
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('¡Botón clicado!');
    button.style.backgroundColor = 'green';
});
