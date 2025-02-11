<img src="../../../00_img/javascript-icon.svg" alt="Logo de JavaScript" height="50" style="margin-right: 20px">
<img src="../../../00_img/jsIconGreen.svg" alt="Logo de Node.js" height="50" style="margin-right: 20px">
<img src="../../../00_img/Express.svg" alt="Logo Express" height="50">

<br>

# Servidor en Node.js con Express

Vamos a aprender a **crear un servidor básico** con [JavaScript](../../../GLOSARIO.md#javascript-js), en [Node.js](../../../GLOSARIO.md#nodejs) usando la librería [Express](../../../GLOSARIO.md#express) de manera sencilla y rápida. Al terminar tendremos un servidor *escuchando* en un puerto local de nuestro ordenador, al que podremos acceder desde nuestro navegador.

Aquí tenemos [**ejemplo**](./servidor-nodejs-express-test/) de como debería quedar el servidor una vez finalizados todos los pasos.

<br>

## 1. Configuración de entorno

Comprobamos que tenemos [Node.js](../../../GLOSARIO.md#nodejs) y [npm](../../../GLOSARIO.md#npm-node-package-manager) instalado usando los siguientes comandos en la consola: ```node -v``` y
```npm -v```.

Podemos comprobar y descargar las versiones actuales aquí:
* [Node.js](../../../GLOSARIO.md#nodejs): https://nodejs.org/en/download (descargamos la última versión desde el link)
* [npm](../../../GLOSARIO.md#npm-node-package-manager): https://www.npmjs.com/package/npm (instalamos la última versión de manera **global** con el comando ```npm install -g npm``` o solo en el **proyecto actual** con ```npm i npm```)

<br>

## 2. Creación de un nuevo proyecto en Node.js

### Creación del directorio
Creamos un directorio (carpeta) para el servidor y navegamos hacia ella en la consola. En nuestro caso de ejemplo la ruta será *workspace/test/web-server*

```mkdir workspace/test/web-server``` (Crea la carpeta)

```cd workspace/test/web-server``` (Navega hacia la carpeta)

### Inicialización del proyecto con npm
Creamos el archivo *package.json* con la configuración básica con ```npm init -y``` (```-y``` indica sí (yes) automáticamente a las opciones de configuración).

<br>

## 3. Instalación de Express

Instalamos [Express](../../../GLOSARIO.md#express) con el comando ```npm install express``` o ```npm i express```.

<br>

## 4. Creación del archivo *index.js* que será nuestro servidor

Creamos el archivo *index.js* para nuestro servidor en la ruta especificada (*workspace/test/web-server*) con el comando ```touch index.js```.

<br>

## 5. Configuración del servidor en *index.js*

Usaremos el archivo *index.js* para configurar el servidor, como en el siguiente ejemplo comentado:

```js
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
```

<br>

## 6. Arrancar el servidor

Podemos iniciar el servidor con el comando ```node index.js``` (desde el directorio donde está nuestro *index.js*, en nuestro ejemplo *workspace/test/**web-server***).

Ya podemos acceder al servidor desde nuestro navegador introduciendo la *url* ***http://localhost:8080/***, donde el servidor está *escuchando*.

<br>

## 7. Detener el servidor

Detenemos el servidor pulsando ***control + c*** en la consola (Windows).