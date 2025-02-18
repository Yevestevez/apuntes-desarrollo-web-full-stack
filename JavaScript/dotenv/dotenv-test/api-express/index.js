// Importamos los módulos necesarios
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Creamos la aplicación Express
const app = express();

// Definimos el puerto, usando el de .env o un valor por defecto
const PORT = process.env.PORT || 5000;

// Habilitamos CORS para permitir peticiones desde el frontend
app.use(cors());

// Ruta que envía un mensaje almacenado en la variable de entorno
app.get("/api/message", (req, res) => {
    res.json({ message: process.env.API_MESSAGE });
});

// Ponemos el servidor a escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});