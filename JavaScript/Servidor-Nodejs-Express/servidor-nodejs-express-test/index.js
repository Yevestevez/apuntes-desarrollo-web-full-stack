const express = require('express'); // Importar Express
const server = express(); // Crear una instancia de Express

// Ruta principal
server.get('/', (req, res) => {
    res.send('¡Hola, mundo! Bienvenido a mi servidor con Express.');
});

// Configurar el puerto
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});