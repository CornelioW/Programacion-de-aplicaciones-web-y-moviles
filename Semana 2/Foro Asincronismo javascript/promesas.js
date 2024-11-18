// Simulando la misma operación usando promesas
function fetchDataWithPromise() {
    console.log("Iniciando la solicitud de datos...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 2, name: "Ejemplo de Promesa" };
            resolve(data); // Simula un resultado exitoso
        }, 2000);
    });
}

// Uso de la promesa
fetchDataWithPromise()
    .then((result) => {
        console.log("Datos recibidos:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
