import { useEffect, useState } from "react";

function App() {
    // Estado para almacenar el mensaje obtenido de la API
    const [message, setMessage] = useState("");

    // Efecto que se ejecuta al montar el componente
    useEffect(() => {
        // Hacemos la petición a la API usando la variable de entorno
        fetch(import.meta.env.VITE_API_URL)
            .then((res) => res.json()) // Convertimos la respuesta a JSON
            .then((data) => setMessage(data.message)) // Guardamos el mensaje en el estado
            .catch((error) => console.error("Error al obtener el mensaje:", error)); // Capturamos errores
    }, []);

    return <h1>{message || "Cargando..."}</h1>; // Mostramos el mensaje o un texto de carga
}

export default App;