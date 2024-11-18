// Simulando una operación asincrónica con un callback
function fetchData(callback) {
    console.log("Iniciando la solicitud de datos...");
    setTimeout(() => {
        const data = { id: 1, name: "Ejemplo de Callback" };
        callback(data);
    }, 2000); // Simula un retraso de 2 segundos
}

// Uso del callback
fetchData((result) => {
    console.log("Datos recibidos:", result);
});
