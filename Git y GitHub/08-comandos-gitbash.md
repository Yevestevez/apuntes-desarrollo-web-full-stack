# Comandos de GitBash
Un listado de los comandos [Git](../GLOSARIO.md#git) y [Bash](../GLOSARIO.md#bash-bourne-again-shell) más habituales que usaremos en nuestra consola de [Git Bash](../GLOSARIO.md#git-bash).

## [Comandos Bash](https://es.wikipedia.org/wiki/Comandos_Bash)

```git --version```<br>
Muestra la versión actual de [Git](../GLOSARIO.md/#git) instalada en el equipo

```node -v```<br>
Muestra la versión de [Node.js](../GLOSARIO.md#nodejs) instalada en el equipo

```pwd```<br>
Muestra el **directorio actual** en el que estamos situados con la consola

```ls```<br>
Muestra un **listado de archivos y directorios** (carpetas) dentro del directorio actual, **incluyendo** archivos y directorios **hijos**

```ls .```<br>
Muestra un **listado de archivos y directorios** (carpetas) solamente en el directorio actual, **sin incluir** los directorios y archivos **hijos**

```ls -a```<br>
Muestra un **listado archivos y directorios** (carpetas) dentro del directorio actual, **incluyendo archivos y directorios ocultos**

```ls -l```<br>
Muestra un **listado archivos y directorios** (carpetas) dentro del directorio actual, **con información ampliada**, como la fecha de creación de archivos y directorios

```mkdir```<br>
Crea un directorio

```cd /ruta/hacia/directorio```<br>
**Cambia de directorio** según la ruta especificada

```cd ..```<br>
Cambia al **directorio superior** o **padre**

```code .```<br>
**Abre Visual Studio Code** desde el directorio actual

```cat nombre-archivo```<br>
El comando *cat* seguido del nombre de un fichero **nos da más información sobre el fichero.** Ejemplo: ```cat .gitignore``` mostrará el código dentro del fichero *.gitignore*

```touch ruta/hacia/directorio/nombre-archivo```<br>
**Crea un archivo** en el directorio especificado en la ruta. Ejemplo: ```touch staff/user-folder/.gitkeep``` genera el archivo *.gitkeep* dentro de *staff/user-folder*

```rm ruta/hacia/directorio/nombre-archivo```<br>
**Elimina un archivo local** en la ruta especificada


## [Comandos Git](https://www.atlassian.com/es/git/glossary#commands)

```git init```<br>
**Inicializa un repositorio [Git](../GLOSARIO.md/#git)** en el directorio actual

```git remote add origin https://github.com/Username/repo-name```<br>
**Sincroniza un repositorio local con uno *origin* en [GitHub](../GLOSARIO.md#github)**. Funciona con el comando ```git remote add origin``` seguido la url de nuestro repositorio origin en [GitHub](../GLOSARIO.md#github)

```git branch```<br>
Muestra la **rama del repositorio *origin*** al que estamos conectados actualmente

```git switch nombre-rama```<br>
**Cambia la rama del repositorio** en la que estamos trabajando. Ejemplo: para ir a la rama *main* escribiremos ```git switch main```

```git add ruta/nombre-archivo-o-carpeta```<br>
**Añade un cambio en el directorio de trabajo al *staging Area*** (espacio en memoria donde se almacenan los cambios antes de ser confirmados *(commit)* en el repositorio)

```git commit```<br>
**Crea un nuevo *commit*** (consolida un cambio) en el repositorio

```git commit -m```<br>
**Crea un nuevo commit** (consolida un cambio) en el repositorio **asociando un mensaje *(-m)* de confirmación** a los cambios realizados.

```git push```<br>
**Sube o *empuja* los cambios** locales a un repositorio remoto *(origin)*

```git status```<br>
**Muestra el estado del repositorio *local* y *origin*** y su **sincronización**. Útil para ver qué archivos han sido modificados, cuales están listos para ser confirmados *(commit)* y qué archivos no están rastreados por [Git](../GLOSARIO.md/#git).
