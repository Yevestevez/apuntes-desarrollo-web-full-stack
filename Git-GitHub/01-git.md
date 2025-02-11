<img src="../00_img/git_logo.png" alt="Logo de Git" height="100"><br>

# Git

[git-scm.com](https://git-scm.com/)

[Git](../GLOSARIO#git) es un [sistema de control de revisiones](../GLOSARIO.md/#scm-source-control-management) distribuido muy utilizado en el desarrollo de *software*. Fue creado por Linus Torvalds y es conocido por su eficiencia, flexibilidad y capacidad para gestionar proyectos de cualquier tamaño.

## Características principales de Git

### Distribuido
Permite que cada desarrollador tenga un **clon local del proyecto**, lo que significa que tiene un repositorio de control de versiones completo y funcional. Esto permite trabajar sin conexión o de forma remota con facilidad.

### Control de versiones
**Registra los cambios realizados en un proyecto**, lo que permite a los desarrolladores ver el historial completo de cambios, saber quién realizó las modificaciones y comparar fácilmente las versiones.

### Ramas
Permite crear **ramas** *(branches)* para hacer pruebas, corregir errores o agregar nuevas características. Luego, estas ramas deben integrarse con la rama principal *(merge)*.

### Seguridad
Agrega una suma de comprobación a cada uno de sus archivos y commits, lo que garantiza la integridad y autenticidad de los datos.

<br>

## Resumen de uso común

Cada desarrollador crea un repositorio local y clona el proyecto existente o inicia uno nuevo con el comando ```git init```

Los cambios se realizan en el clon local *(local)* y se agregan al *staging Area* (espacio en memoria donde se almacenan los cambios antes de ser confirmados en el repositorio) con el comando ```git add```

Los cambios se confirman *commits* usando el comando ```git commit```
Esto que registra los cambios y crea una nueva versión del proyecto.

Los *commits* (cambios confirmados) se pueden subir al repositorio de [GitHub](../GLOSARIO.md#github) *(origin)* utilizando el comando ```git push```