// Simulando la operación con async/await
function fetchDataAsync() {
    console.log("Iniciando la solicitud de datos...");
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 3, name: "Ejemplo con Async/Await" };
            resolve(data);
        }, 2000);
    });
}

// Uso de async/await
async function main() {
    try {
        const result = await fetchDataAsync();
        console.log("Datos recibidos:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
