# Creación de un paquete común *(com)* local con Node.js y ES Modules

## ¿Qué es un paquete o dependencia común?

Un paquete común es un conjunto de **directorios y ficheros que podemos compartir en varias partes separadas de nuestro proyecto** (que pasa a depender de este paquete), consiguiendo así **no tener que repetir código** redundante.

Las **ventajas** de este método son:

* **Estructura modular:** Los servidores pueden importar el paquete sin rutas relativas.
* **Facilidad de mantenimiento:** Si actualizamos el paquete común, todos los servidores usarán la nueva versión.
* **Sin necesidad de publicar:** No hace falta subirlo a [npm](../../GLOSARIO.md#npm-node-package-manager), solo usarlo dentro del proyecto.

Si en el futuro necesitamos publicar el paquete en [npm](../../GLOSARIO.md#npm-node-package-manager) para usarlo en otros proyectos, solo tendríamos que usar el comando:

```sh
npm publish --access public
```

<br>

## Creación del paquete común

### 1. Configuración del paquete

Primero necesitamos configurar nuestro directorio común (com) como un paquete de [Node.js](../../GLOSARIO.md#nodejs), para ello usamos el siguiente comando dentro del directorio que queremos que sea común:

```sh
npm init -y
```

Esto genera un fichero ***package.json***, que ahora debemos editar para convertirlo en un módulo, para ello es importante cambiar a ```"type": "module"``` dentro del archivo:

```json
{
  "name": "com",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Podemos usar un fichero ***index.js*** como indexador para **importar y exportar** el código que necesitemos dentro del paquete común, pero primero debemos instalar el paquete recién creado donde lo vayamos a usar.

<br>

### 2. Configuración del paquete

Podemos instalar el paquete común (com) desde donde lo necesitamos, como si instalaramos cualquier paquete desde internet, con el comando:

```sh
npm install ../com
```

Simplemente debemos seguir la ruta relativa a nuestro com mediante ```../``` como sea necesario en cada caso. Esto generará una nueva dependencia en el ***package.json*** donde instalemos nuestro paquete común:

```json
"dependencies": {
    "com": "file:../com"
}
```

Recordemos que para poder importar/exportar mediante ***import/export*** de ***ES Modules*** debemos tener en todos los *packages.json* de nuestro proyecto el tipo configurado a *"module"* (```"type": "module"```).

<br>

### 3. Exportación e importación de código

#### Exportación desde *'com'*:

Para exportar el código de *'com'* usaremos su *index.js* como indexador donde importar las lógicas necesarias y exportarlas, por ejemplo:

```js
// importamos código de otros ficheros dentro de "com":
import errors from './errors/index.js';
import validate from './validate.js';

// lo exportamos mediante un objeto "bucket" (cubo) de esta manera:
export {
    errors,
    validate
}
```

#### Importación desde otras partes del proyecto:

Ahora simplemente debemos importar las partes del código que necesitemos mediante import de *ES Modules*, por ejemplo:

```js
// una vez instalado nuestro paquete, ya podemos importar las partes necesarias, aquí usamos desestructuración para hacerlo de manera más ordenada
import { validate, errors } from 'com';
```

<br>

Aquí tenemos un [ejemplo de paquete común](./paquete-comun-nodejs-esmodule-test/), aplicado a un proyecto con una *app (front-end)* y una *api (back-end)*, para ilustrar mejor la teoría.