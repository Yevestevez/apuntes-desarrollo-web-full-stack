<img src="../../../00_img/MongoDB_Logo.svg" height="50" style="background-color: white; padding: 20"><br>

# Instalación de un servidor de bases de datos de MongoDB en Windows

Instalaremos [MongoDB](../../../GLOSARIO.md#mongodb) en nuestra máquina, arrancaremos una base de datos *(test)*, que quedará a la espera de nuestros comandos, y accederemos a ella con **MongoDB Shell**.

<br>

## 1. Instalación de MongoDB y MongoDB Shell

* Con [MongoDB](../../../GLOSARIO.md#mongodb) mediante la consola de [Git Bash](../../../GLOSARIO.md#git-bash) arrancaremos la base de datos en nuestro equipo.

* Con **MongoDB Shell** mediante la consola de **Windows PowerShell** interactuaremos con la base de datos (añadiendo, modificando y eliminando colecciones, documentos y campos…).


### Instalación de MongoDB

Descargamos [MongoDB](../../../GLOSARIO.md#mongodb) desde su [página web](https://www.mongodb.com/try/download/community) (para Windows usaremos el ***ZIP*-Windows x64**).

Extraemos el *ZIP* y llevamos su contenido a la carpeta ***bin*** de nuestro usuario de Windows *(C:\Users\user\bin\mongodb-win32-x86_64-windows-8.0.4)*.

En la ruta anterior, creamos una nueva carpeta y la nombramos como ***data***. Más tarde especificaremos a [MongoDB](../../../GLOSARIO.md#mongodb) que genere nuestra base de datos en esta carpeta.

### Instalación de Mongo DB Shell

Descargamos **MongoDB Shell** desde su [página web](https://www.mongodb.com/try/download/shell) (para Windows usaremos el ***ZIP*-Windows x64)**.

Extraemos el *ZIP* y llevamos su contenido a la carpeta ***bin*** de nuestro usuario de Windows *(C:\Users\user\bin\mongodb-win32-x86_64-windows-8.0.4)*.

<br>

## 2. Arranque de la base de datos

En la consola de [Git Bash](../../../GLOSARIO.md#git-bash), desde nuestro usuario nos movemos a la carpeta de mongodb con el comando
```cd bin/mongodb-win32-x86_64-windows-8.0.4/```.

Desde esta carpeta usamos el siguiente comando para especificar a [MongoDB](../../../GLOSARIO.md#mongodb) donde queremos instalar nuestra base de datos, en nuestro caso, dentro de la carpeta ***bin*** de [MongoDB](../../../GLOSARIO.md#mongodb) ```./bin/mongod --dbpath data```

Aquí estamos llamando al archivo ***mongod.exe*** y especificando la ruta a ***data***

En este punto la consola se llenará de caracteres y la base de datos quedará esperando nuestras instrucciones. Veremos ahora cómo acceder a esta *db* para interactuar con ella, desde MongoDB Shell.

## 3. Acceso a la base de datos

Desde la consola de **Windows PowerShell** (importante porque no funciona correctamente desde [Git Bash](../../../GLOSARIO.md#git-bash) en Windows) navegamos a la carpeta de *mongosh*, desde la carpeta de usuario sería con este comando: ```cd bin/mongosh-2.3.8-win32-x64```.

Desde esta carpeta arrancamos **MongoDB Shell** con el ejecutable que está en la carpeta ***bin*** con este comando: ```./bin/mongosh```.

Ahora aparecerá en consola ```test>``` indicando que ya podemos interactuar con nuestra *db*. Aquí veremos algunos [comandos de MongoDB](./05-comandos-mongodb.md).