# Preparación del entorno de Git y GitHub en Windows

## 1. Instalación de **Git Bash**

<img src="../00_img/gitforwindows_logo.png" alt="Logo de Git Bash" height="25">

Descargamos e instalamos [Git Bash](../GLOSARIO.md#git-bash) desde [gitforwindows.org](https://gitforwindows.org/), esto nos permitirá acceder al terminal *Mintty*, desde donde podremos configurar e interactuar con nuestro futuro repositorio.

<br>

## 2. Instalación de **Visual Studio Code**

<img src="../00_img/VisualStudioCode_logo.png" alt="Logo de Visual Studio Code" height="25">

[Visual Studio Code](../GLOSARIO.md#vsc-visual-studio-code) será nuestro editor de código fuente. Lo descargamos e instalamos  desde [code.visualstudio.com](https://code.visualstudio.com/Download).

<br>

## 3. Instalación de Node.js

<img src="../00_img/jsIconGreen.svg" alt="Logo de Node.js" height="25">

[Node.js](../GLOSARIO.md#nodejs) será nuestro entorno de ejecución de [JavaScript](../GLOSARIO.md#javascript-js) Lo descargamos e instalamos desde [nodejs.org](https://nodejs.org/en).

<br>

## 4. Creación de los directorios (carpetas) de nuestro futuro repositorio

Vamos a configurar los directorios desde la consola de [Git Bash](../GLOSARIO.md#git-bash) para ir cogiendo soltura.

Con el comando ```git --version``` comprobamos la versión de [Git](../GLOSARIO.md#git) que tenemos instalada. Desde [git-scm.com](https://git-scm.com/downloads) podemos comprobar y descargar la versión más reciente si la que tenemos en nuestro equipo es muy antigua.

A continuación comprobamos la versión de [Node.js](../GLOSARIO.md#nodejs) con el comando ```node -v```. Debería ser reciente si la hemos instalado en el paso anterior, pero desde [git-scm.com](https://git-scm.com/downloads) podemos comprobar y descargar la versión más reciente si la que tenemos en nuestro equipo es muy antigua.

Volvemos a la consola de [Git Bash](../GLOSARIO.md#git-bash) y mostramos la ruta actual en la que estamos posicionados con el comando ```pwd```. En Windows por defecto estaremos en nuestra carpeta de usuario (C:\Users\username).

Con el comando ```ls``` mostramos un listado de los directorios (carpetas) dentro del directorio actual. Creamos el directorio ***workspace*** mediante el comando ```mkdir workspace```, esta es la carpeta donde vamos a situar nuestros repositorios.

Ahora creamos el directorio ***repo-test*** con el comando ```mkdir repo-test```.  Posteriormente lo convertiremos en nuestro repositorio.

A continuación aprenderemos a [crear nuestro primer repositorio en GitHub](./05-creacion-repositorio-github.md) para posteriormente poder entender el [flujo de trabajo](./06-flujo-trabajo-git-flow.md) *(workflow)* de [Git](../GLOSARIO.md#git) [*(GitFlow)*](../GLOSARIO.md#gitflow) antes de [inicializar nuestro primer repositorio local](./07-inicializacion-sincronizacion-repositorio-local.md).