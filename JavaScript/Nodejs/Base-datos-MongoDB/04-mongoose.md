# Mongoose

## 1. ¿Qué es Mongoose?

[Mongoose](../../../GLOSARIO.md#mongoose) es una biblioteca de modelado para [MongoDB](../../../GLOSARIO.md#mongodb) en [Node.js](../../../GLOSARIO.md#nodejs) que se encarga de facilitarnos interactuar con nuestra base de datos.

<br>


## 2. Desinstalación de MongoDB

Antes de instalar [Mongoose](../../../GLOSARIO.md#mongoose) desinstalamos [MongoDB](../../../GLOSARIO.md#mongodb) si lo teníamos instalado en nuestro proyecto, ya que este se volverá a instalar como una dependencia de [Mongoose](../../../GLOSARIO.md#mongoose). Lo haremos desde la consola con el comando ```npm u mongodb```.

<br>

## 3. Instalación de Mongoose

Instalamos [Mongoose](../../../GLOSARIO.md#mongoose) desde la consola mediante [npm](../../../GLOSARIO.md#npm-node-package-manager) con el siguiente comando (siempre en la carpeta de nuestro proyecto) ```npm i mongoose```.

<br>

## 4. Esquemas *(Schemas)* y modelos *(models)* 

Los esquemas y modelos sirven para estructurar y manejar los datos en una base de datos *NoSQL*.

### Esquemas *(Schemas)*

Un esquema **define la estructura de los documentos** en una colección de [MongoDB](../../../GLOSARIO.md#mongodb). Es como una plantilla que especifica qué campos tendrá un documento y qué tipo de datos debe contener cada campo.

Ejemplo:

```js
const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ingredientes: [String], // Un array de strings
  tiempoPreparacion: { type: Number, min: 1 }, // Tiempo en minutos
  fechaCreacion: { type: Date, default: Date.now }
});
```

### Modelos *(models)*

Un modelo es una **representación de una colección** en la base de datos **basada en un esquema**. Se usa para interactuar con la base de datos (crear, leer, actualizar y eliminar documentos).

Ejemplo de un modelo basado en el esquema anterior:

```js
const Receta = mongoose.model('Receta', recetaSchema);
```
Aquí, ```Receta``` es el modelo que representa la colección ```recetas``` en la base de datos ([Mongoose](../../../GLOSARIO.md#mongoose) pluraliza el nombre automáticamente).

<br>

## 5. Implementación de Mongoose en JavaScript

Para implementar [Mongoose](../../../GLOSARIO.md#mongoose) en [JavaScript](../../../GLOSARIO.md#javascript-js) seguimos los siguientes pasos:

1. Importar [Mongoose](../../../GLOSARIO.md#mongoose)
2. Crear esquemas (*Schema*) y modelos (*model*)
3. Conectar a [MongoDB](../../../GLOSARIO.md#mongodb) mediante [Mongoose](../../../GLOSARIO.md#mongoose)

Ejemplo (comentado):

```js
import mongoose from "mongoose"; // Importamos mongoose del paquete previamente instalado

const { Schema, model } = mongoose; // Traemos los esquemas y modelos de moongose

// Creación de un esquema (Schema)
const user = new Schema({ // Creamos la instancia 'user' de la clase 'Schema', previamente importada de mongoose
    name: { // Añadimos la propiedad 'name' a user
        type: String, // Especificamos que será de tipo 'String'
        required: true // Especificamos que es un campo obligatorio
    },
    email: {
        type: String,
        required: true,
        unique: true // Especificamos que la propiedad 'email' debe ser única, no puede haber más de un usuario con el mismo email
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

// Creación de un modelo (model)
const User = model('User', user); // Declaramos User como modelo y como parámetros especificamos el nombre ('User') y el esquema para su creación (user)
// user será una colección de nuestra db, en la que luego insertaremos los distintos usuarios (documentos)
// Conexión con Mongoose
mongoose.connect('mongodb://localhost:27017/test') // Conectamos a MongoDB mediante el método 'connect' y especificamos la URL incluyendo el nombre de la db (test)
    .then(() => { // Mongoose trabaja con promesas (then y catch)
        // Ejemplo de inserción de nuevo documento (usuario) a la colección user de nuestra db
        const edu = new User({ name: 'Eduardo Yeves', email: 'eduardo@yeves.com', username: 'EduYeves', password: '123123123' }) // Especificamos los valores de los campos

        edu.save() // Guardamos el nuevo usuario en la db
            .then(() => console.log('user save')) // Mostramos por consola si se registra el usuario correctamente
            .catch(error => console.error(error)) // Capturamos posibles errores (al insertar el nuevo usuario) y los mostramos por consola

    })
    .catch(error => console.error(error)); // Capturamos posibles errores (de conexión con la db) y los mostramos por consola
```

Ejemplo sin comentarios:

```js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const User = model('User', user);

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        const edu = new User({ name: 'Eduardo Yeves', email: 'eduardo@yeves.com', username: 'EduYeves', password: '123123123' })

        edu.save()
            .then(() => console.log('user save'))
            .catch(error => console.error(error))

    })
    .catch(error => console.error(error));
```