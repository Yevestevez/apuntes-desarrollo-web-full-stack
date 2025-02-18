# Integración de MongoDB con JavaScript

## 1. Instalación del *driver* de MongoDB

Instalamos el paquete de [MongoDB](../../GLOSARIO.md#mongodb) (usando [npm](../../GLOSARIO.md#npm-node-package-manager)) en el proyecto donde queramos conectar con la base de datos con el comando ```npm i mongodb```.

<br>

## 2. Conexión de la base de datos con nuestro archivo JavaScript

En el siguiente ejemplo (comentado) conectaremos a la base de datos de [MongoDB](../../GLOSARIO.md#mongodb) desde nuestro archivo [JavaScript](../../GLOSARIO.md#javascript-js).

```js
import mongodb from 'mongodb'; // Importamos mongodb del paquete previamente instalado

const { MongoClient, ObjectId } = mongodb; // Traemos MongoClient y ObjectId desde mongodb mediante desestructuración

const client = new MongoClient('mongodb://localhost:27017'); // Creamos un nuevo cliente mediante una nueva instancia de la clase MongoClient, esto nos permitirá conectar con MongoDB

client.connect() // Conectamos con MongoDB mediante el método .connect
    .then(connection => {
        const db = connection.db('test'); // Usamos la conexión actual (client) para crear una nueva instancia de la db 'test'. Si no existiera, MongoDB la crearía al insertar el primer documento

        const users = db.collection('users'); // Traemos la referencia a la colección 'users' de MongoDB, si no existiera, MongoDB la crearía al insertar el primer documento en ella
        const posts = db.collection('posts'); // Traemos la referencia a la colección 'posts' de MongoDB, si no existiera, MongoDB la crearía al insertar el primer documento en ella
    })
    .catch(error => console.error(error)); // Capturamos los posibles errores y los mostramos por consola
```

Ejemplo **sin comentarios**:

```js
import mongodb from 'mongodb';

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient('mongodb://localhost:27017');

client.connect()
    .then(connection => {
        const db = connection.db('test');

        const users = db.collection('users');

        const posts = db.collection('posts');
    })
    .catch(error => console.error(error));
```

<br>

## 3. Métodos de ejemplo de MongoDB

Algunos **métodos de ejemplo** que podemos usar en nuestras *db*, basados en los [comandos de MongoDB](./05-comandos-mongodb.md):

```js
users.insertOne({ name: 'Capitán Garfio', email: 'capitan@garfio.com', username: 'capitangarfio', password: '123123123' })
    .then(result => console.log(result))
    .catch(error => console.error(error));

users.deleteOne({ _id: new ObjectId('678ff85a5cca2e105cd850ef') })
    .then(result => console.log(result))
    .catch(error => console.error(error));

users.updateOne({ _id: new ObjectId('678ffb9af38a3efb6ea1e593') }, { $set: { password: '234234234' } })
    .then(result => console.log(result))
    .catch(error => console.error(error));

posts.insertOne({ author: new ObjectId('678eafa4be23e160e3cb0ce4'), image: 'https://i.ytimg.com/vi/9oWEZSL_53U/maxresdefault.jpg', text: 'hola mundo', date: new Date() })
    .then(result => console.log(result))
    .catch(error => console.error(error));

posts.deleteMany({})
    .then(result => console.log(result))
    .catch(error => console.error(error));
```