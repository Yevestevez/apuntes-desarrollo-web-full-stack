# Inicialización y sincronización de un repositorio local ***(Work In Progress)***

## 1. Inicialización del repositorio *(git init)*

Convertimos el directorio *repo-test*, que habíamos [creado anteriormente](./04-preparacion-entorno-git-github.md#4-creación-de-los-directorios-carpetas-de-nuestro-futuro-repositorio), en un repositorio de [Git](../GLOSARIO.md#git). Para ello nos situamos en la carpeta con la consola de [Git Bash](../GLOSARIO.md#git-bash) y, usamos el comando ```git init```. Esto genera automáticamente un directorio *.git* que **no debemos modificar**, ya que permite a [Git](../GLOSARIO.md#git) saber que la carpeta *repo-test* es un repositorio.

<br>

## 2. Sincronización de los repositorios *origin-local*

A continuación sincronizamos el repositorio *local* que acabamos de crear con el repositorio en *origin* en [GitHub](../GLOSARIO.md#github). Lo haremos copiando la *url* de nuestro repositorio ***(https://github.com/Username/repo-test)*** y utilizando el comando ```git remote add origin https://github.com/Username/repo-test```.

<br>

## 3. Descarga del repositorio *origin* a *local*

Ahora podemos descargar el repositorio *origin* en [GitHub](../GLOSARIO.md#github) a nuestro repositorio *local* con el comando ```git fetch```. Con ```git branch -a``` podemos ver la rama del repositorio *origin* a la estamos conectados. Por defecto [Git](../GLOSARIO.md#git) asigna una rama *master*, podemos cambiar a la rama *main* con el comando ```git switch main```.

<br>

## 4. Creación y cambio a la rama *develop*

Después cambiamos a la rama develop de nuestro repositorio con git switch develop y generamos un archivo .gitkeep para que Git tenga en cuenta nuestra carpeta de usuario eduardo-yeves. Esto es necesario ya que Git no tiene en cuenta las carpetas vacías. Para ellos usamos el comando touch seguido de la ruta donde queremos crear el archivo y el nombre del archivo… desde nuestro directorio isdi-parttime-202410 sería así: touch staff/eduardo-yeves/.gitkeep


## 5. Añadir cambios *(git add)* y aceptarlos *(git commit)*

## 6. Subida de cambios a *origin (git push)*

## 7. Tokens de Git

## *gitignore*

## 8. Propagar cambios entre repositorios de GitHub *(Sync Fork y Pull Request)*

## 9. Propagar cambios de origin a local *(git pull)*

## 10. *Features branches*

## 11. *Issue tracking*