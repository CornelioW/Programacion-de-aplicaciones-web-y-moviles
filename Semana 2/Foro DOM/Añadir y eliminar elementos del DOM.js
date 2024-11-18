// Añadir un nuevo elemento
const newElement = document.createElement('div');
newElement.innerHTML = 'Este es un nuevo div';
document.body.appendChild(newElement); // Añadir al final del body

// Eliminar un elemento
const toBeRemoved = document.getElementById('removeMe');
toBeRemoved.remove(); // Elimina directamente el elemento del DOM
