# dotenv *(.env)*
[npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

<br>

## ¿Qué es dotenv *(.env)*?

[dotenv](../../GLOSARIO.md#dotenv-env) es un módulo de [Node.js](../../GLOSARIO.md#nodejs) que carga variables de entorno *(environment variables)* desde un archivo ***.env*** (ajeno a nuestro código principal) y los vuelca en el objeto ***process.env*** en nuestro código, de esta manera **queda separada la información sensible** (secretos, puertos…) y podemos cambiar esa información de manera más sencilla en los distintos archivos de nuestro código.

<br>

## ¿Qué son las variables de entorno *(environment variables)*?

Las variables de entorno son **valores configurados externamente en pares de CLAVE = valor** (ej: PORT = 8080) en un archivo *.env*. Esto ayuda a **mantener la configuración separada del código**, facilitando la implementación de la aplicación en diferentes entornos sin necesidad de modificar el código fuente. Las **CLAVES** se escriben con mayúsculas ya que representan constantes.

<br>

## Instalación de *dotenv*

Instalamos el paquete [dotenv](../../GLOSARIO.md#dotenv-env). Lo haremos en la carpeta raíz de nuestro proyecto (al mismo nivel que *index.js*) mediante el comando ```npm i dotenv```.

<br>

## Archivo .env

Creamos un archivo *.env* (simplemente un archivo con ese nombre) en la carpeta raíz, donde volcaremos las variables ***(CLAVE = valor)*** que queremos guardar externas al código fuente. Ejemplo de archivo *.env*:

```ini
PORT = 8080
JWT_SECRET = esto es un secreto para crear los tokens
MONGO_URL = mongodb://localhost:27017/test
```

<br>

## Implementación *standard* de *dotenv*

Importamos [dotenv](../../GLOSARIO.md#dotenv-env) en nuestro *index.js* lo antes posible en el código mediante ```import 'dotenv/config';```

Cómo ya tenemos declaradas las variables de entorno en el archivo *.env*, debemos eliminar la declaración de estas variables que teníamos en nuestro código fuente. Cuando necesitemos acceder a estas variables, debemos hacerlo con ```process.env.NOMBRE_CLAVE```. Ejemplos:

```js
const connectToDb = () => mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connected'));
```

```js
api.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`));
```

```js
const token = jwt.sign(payload, process.env.JWT_SECRET);
```

Con estos pasos ya tenemos configuradas las variables de entorno, veamos ahora cómo podemos implementar [dotenv](../../GLOSARIO.md#dotenv-env) en un proyecto que trabaja con [Vite](../../GLOSARIO.md#vite).

<br>

## Implementación de *dotenv* con **Vite**

### Archivo *.env*

Si usamos [Vite](../../GLOSARIO.md#vite) **NO** es necesario instalar el paquete de [dotenv](../../GLOSARIO.md#dotenv-env) (```npm i dotenv```) , pero si debemos crear el archivo *.env* en nuestra carpeta raíz (al mismo nivel que *index.jsx*). Dentro del *.env* añadiremos **VITE_** como prefijo del nombre de las claves que necesitemos. Ejemplo:

```ini
VITE_API_URL = http://localhost:8080
```

<br>

### Importación y uso de dotenv

No necesitamos importar *.env* en nuestro código fuente ya que [Vite](../../GLOSARIO.md#vite) lo hace de manera interna, simplemente usaremos ```import.meta.env.VITE_NOMBRE_CLAVE``` cuando necesitemos acceder las variables. Ejemplo:

```js
return fetch(`${import.meta.env.VITE_API_URL}/posts`, {...}
```

Podemos usar [dotenv](../../GLOSARIO.md#dotenv-env) para guardar variables que necesitemos usar de manera recurrente y/o que queramos que permanezcan privadas. Un buen ejemplo es el puerto de acceso a un servidor, ya que si en el futuro necesitamos cambiar de puerto, sería suficiente con modificarlo una vez (dentro del archivo *.env*) y no en todas las lógicas de nuestro código fuente.

<br>

## .gitignore

El archivo *.env* suele estar incluído por defecto en los archivos *.gitignore* para evitar subir información sensible a [GitHub](../../GLOSARIO.md#github).
Si queremos forzar su subida para guardarlo como referencia y no vamos a guardar información sensible, podemos hacerlo creando un archivo *.gitignore* en la raíz de nuestro proyecto (al nivel de *index.js*) y añadiendo el *.env* a la lista de archivos no ignorados mediante esta línea de código dentro del .*gitignore*:

```bash
!.env
```