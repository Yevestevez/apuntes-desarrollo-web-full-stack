# GLOSARIO

Este es un glosario de lenguajes, tecnologías y términos que usaremos para la creación de nuestra App Full Stack (Front-End y Back-End). De cada término tenemos un enlace, una pequeña descripción y el uso en nuestra App del Bootcamp.

No pretende ser un glosario muy preciso (para eso están los enlaces), más bien una manera casera, básica y sencilla de entender los términos.

## ÍNDICE

* [API](#api-application-programming-interface) *(Application Programming Interface)*  
* [Babel](#babel)  
* [Bash](#bash-bourne-again-shell) *(Bourne-again shell)*  
* [bcrypt](#bcrypt)  
* [CSS](#css-cascading-style-sheets) *(Cascading Style Sheets)*  
* [DOM](#dom-document-object-model) *(Document Object Model)*  
* [dotenv](#dotenv-env) *(.env)*  
* [ESLint](#eslint)  
* [Express](#express)
* [Framework](#framework) ❌
* [Git](#git)  
* [Git Bash](#git-bash)  
* [GitFlow](#gitflow)  
* [GitHub](#github)  
* [HTML](#html-hypertext-markup-language) *(HyperText Markup Language)*  
* [HTTP](#http-xxx) *(Hypertext Transfer Protocol)*  
* [JavaScript](#javascript-js) *(JS)*  
* [Jira](#jira)  
* [JWT](#jwt-json-web-tokens) *(JSON Web Token)*  
* [Middleware](#middleware)  
* [MongoDB](#mongodb)  
* [Mongoose](#mongoose) ❌
* [Node.js](#nodejs)  
* [NPM](#npm-node-package-manager) *(Node Package Manager)* ❌
* [React](#react) ❌
* [React Router DOM](#react-router-dom) ❌
* [SCM](#scm-source-control-management) *(Source Control Management)*  
* [Shell](#shell)  
* [Surge](#surge) ❌
* [Tailwind CSS](#tailwind-css) ❌
* [TypeScript](#typescript) ❌
* [Vite](#vite) ❌
* [VSC](#vsc-visual-studio-code) *(Visual Studio Code)*  

<br>

---

### [API](https://developer.mozilla.org/es/docs/Glossary/API) *(Application Programming Interface)*

#### ¿Qué es?
Una API **(Interfaz de Programación de Aplicaciones)** define un **conjunto de directivas que pueden ser usadas para tener una pieza de software funcionando con otras.**
En un contexto web, su uso es un poco más restrictivo, ya que es usado casi sólo con [JavaScript](#javascript-js). En ese contexto, una API es usualmente un **conjunto de métodos, propiedades y eventos con el fin de lograr ciertas tareas.**

#### Uso en App
En nuestra App podemos usar APIs para conseguir distintas funcionalidades, una de la más importante es el [DOM]().

<br>

### [Babel](https://babeljs.io/)

#### ¿Qué es?
Babel es un **compilador de [JavaScript](#javascript-js)** que permite usar características modernas del lenguaje (como *ES6+*, *TypeScript* o *JSX*) y convertirlas en una versión compatible con navegadores o entornos más antiguos.

Sirve para transpilar (traducir) código moderno a versiones anteriores de [JavaScript](#javascript-js), permitir el uso de nuevas características sin preocuparse por la compatibilidad, convertir *JSX* en [JavaScript](#javascript-js) normal para [React](#react) y optimizar código con *plugins* y *presets*.

#### Uso en App
Usaremos Babel para transpilar el código de nuestros archivos *.jsx* de [React](#react) a [JavaScript](#javascript-js) vanilla. Usaremos [Vite](#vite) en nuestra app y este instala y usa Babel de manera automática.

<br>

### [Bash](https://es.wikipedia.org/wiki/Bash) *(Bourne-again shell)*

#### ¿Qué es?
Bash *(Bourne-again shell)* es una **interfaz de usuario de línea de comandos** popular, específicamente un [*shell*](#shell) de Unix; así como un lenguaje de *scripting*. Bash es un intérprete de órdenes que generalmente se ejecuta en una ventana de texto donde el usuario escribe órdenes en modo texto.

#### Uso en App
Usaremos el [*shell*](#shell) Bash para interactuar con nuestra App, generalmente en la terminal del VSC. Podemos hacer cosas como dirigirnos a alguna carpeta *(cd...)*, arrancar un servidor mediante npm *(npm start)* o interactuar con Git *(git add, git commit…)*.

<br>

### [bcrypt](https://www.npmjs.com/package/bcrypt)

#### ¿Qué es?
bcrypt es una **biblioteca de [Node.js](#nodejs)** que se usa para ***hashear* contraseñas de manera segura**. Utiliza el algoritmo *Blowfish* para generar un *hash* con un coste computacional ajustable, lo que hace que sea más resistente a ataques de fuerza bruta.

Características principales:

* ***Salt:*** Agrega un valor aleatorio a cada *hash* para evitar ataques de diccionario.
* ***Rounds:*** Permite ajustar la cantidad de rondas de *hashing* para aumentar la seguridad.
* **Comparación segura:** Proporciona funciones para comparar contraseñas sin riesgo de ataques de tiempo.

#### Uso en App
Usaremos bcrypt para generar un ***hash* que almacenaremos en nuestra base de datos en lugar de las contraseñas** introducidas por los usuarios al registrarse. Así, reforzamos con una capa más de seguridad datos tan sensibles como las contraseñas.

<br>

### [CSS](https://developer.mozilla.org/es/docs/Web/CSS) *(Cascading Style Sheets)*

#### ¿Qué es?
CSS **(Hojas de Estilo en Cascada)** es el lenguaje de estilos utilizado para describir la presentación de documentos [HTML](#html-hypertext-markup-language) o XML. CSS describe cómo debe ser renderizado el elemento estructurado en la pantalla.

#### Uso en App
Usamos CSS para definir los estilos de nuestra App, si [HTML](#html-hypertext-markup-language) indica que se va a mostrar en pantalla, CSS especifica el **cómo** (tamaños, posición, colores, etc…). Tenemos un archivo ***main.css*** donde indicamos los estilos que aplican a toda la App, y archivos *.css* por cada componente *(Landing.css, Login.css, Register.css…)* donde especificamos estilos más concretos para cada vista.

<br>

### [DOM](https://developer.mozilla.org/es/docs/Glossary/DOM) *(Document Object Model)*

#### ¿Qué es?
El DOM **(Modelo de Objetos del Documento)** es una **[API](#api-application-programming-interface) definida para representar e interactuar con cualquier documento [HTML](#html-hypertext-markup-language) o XML.** Es un modelo de documento que se carga en el navegador web y que **representa el documento como un árbol de nodos**, donde cada nodo representa una parte del documento.

#### Uso en App
Usamos el DOM para “pintar” los elementos [HTML](#html-hypertext-markup-language) de nuestra App desde [JavaScript](#javascript-js) e interactuar con ellos. Por ejemplo, para dar funcionalidad a un botón o mostrar diferentes vistas de la App según determinadas condiciones.

<br>

### [dotenv](https://www.npmjs.com/package/dotenv) *(.env)*

#### ¿Qué es?
dotenv es un paquete de [Node.js](../../GLOSARIO.md#nodejs) que carga variables de entorno *(environment variables)* desde un archivo ***.env*** (ajeno a nuestro código principal) y los vuelca en el objeto ***process.env*** en nuestro código, de esta manera **queda separada la información sensible** (secretos, puertos…) y podemos cambiar esa información de manera más sencilla en los distintos archivos de nuestro código.

#### Uso en App
Usaremos dotenv para guardar los puertos de la app y la api, el secreto de [JWT](#jwt-json-web-tokens) y las *URLS* de [MongoDB](#mongodb) de manera aislada.

<br>

### [ESLint](https://eslint.org/)

#### ¿Qué es?
ESLint es una **herramienta de análisis de código estático** para [JavaScript](#javascript-js) y [TypeScript]() que ayuda a encontrar y **corregir errores de sintaxis, problemas de estilo y malas prácticas**.

Características principales:

* ***Linter* configurable:** Permite definir reglas personalizadas o usar configuraciones predefinidas como las de *Airbnb* o *Standard*.
* **Soporte para *plugins*:** Puede ampliarse con *plugins* para *frameworks* como [React](#react), Vue o [Node.js](#nodejs).
* **Corrección automática:** Puede arreglar muchos problemas automáticamente con el comando ```eslint --fix```.
* **Integración con editores:** Funciona con [VSC](#vsc-visual-studio-code), WebStorm y otros editores para mostrar errores en tiempo real.

#### Uso en App
¿?

<br>

### [Express](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#%C2%BFqu%C3%A9_son_express_y_node)

#### ¿Qué es?
Express es el **[framework]()** web más popular de [Node.js](#nodejs), y es la librería subyacente para un gran número de otros frameworks web de [Node.js](#nodejs) populares. Proporciona mecanismos para escritura de manejadores de peticiones [HTTP](#http-hypertext-transfer-protocol), integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas y añadir procesamiento de peticiones [middleware](#middleware) adicional, entre otros.

#### Uso en App
Usamos Express, por ejemplo, en el *index.js* de nuestra [API](#api-application-programming-interface) para usar los métodos *POST, GET y DELETE* en las llamadas al servidor.

<br>

### [Framework](www.xxx.com)

#### ¿Qué es?

#### Uso en App

<br>

### [Git](https://developer.mozilla.org/es/docs/Glossary/Git)

#### ¿Qué es?
**Git es un *software* de control de versiones [(SCV)](#scm-source-control-management)** distribuido, libre y de código abierto. Facilita el manejo de código fuente con equipos de desarrollo distribuidos. La principal diferencia con SCV previos es la habilidad para hacer operaciones comunes (branching, committing, etc.) en el equipo de desarrollo local, sin tener que modificar el repositorio máster o tener acceso de escritura a él.

#### Uso en App
Usamos Git para guardar las modificaciones de nuestra App que vamos haciendo en VSC. Lo hacemos mediante la consola y nos sirve para añadir o modificar archivos *(git add)*, para confirmar los cambios *(git commit)*, para subir los archivos a GitHub *(git push)*, etc...

<br>

### [Git Bash](https://gitforwindows.org/)

#### ¿Qué es?
**Git Bash es una herramienta que combina las funcionalidades de [Git](#git) con las utilidades de [Bash](#bash-bourne-agin-shell) en un ambiente de Windows.** Es una aplicación que proporciona una experiencia de línea de comandos mejorada, permitiendo a los usuarios **ejecutar comandos de Unix** adaptados para funcionar en Windows. Esto facilita la gestión de versiones a través de comandos de texto.

#### Uso en App
Usaremos la terminal de Git Bash para interactuar con [Git](#git) *(git add, git commit…)*, arrancar la base de datos de MongoDB en nuestro sistema y otras funciones.

<br>

### [GitFlow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)

#### ¿Qué es?
GitFlow es un **modelo de ramificación para [Git](#git)** que organiza el desarrollo de *software* de manera estructurada. Define reglas claras sobre cómo deben gestionarse las ramas y facilita el trabajo en equipo.

**Ramas principales** en GitFlow:

* ***main:*** Contiene el código en producción.
* ***develop:*** Rama de desarrollo donde se integran nuevas funcionalidades antes de llegar a producción.

**Ramas de soporte**:

* ***Feature branches* (feature/nueva-funcionalidad):** Para desarrollar nuevas características, parten de *develop* y se fusionan de vuelta allí.
* ***Release branches* (release/v1.0):** Se crean desde develop para preparar una nueva versión, permitiendo pruebas y correcciones antes de fusionarse en *main*.
* ***Hotfix branches* (hotfix/bug-crítico):** Para corregir errores críticos en producción, parten de *main* y se fusionan en *main* y *develop*.

#### Uso en App
Usaremos GitFlow como método para trabajar en ramas de manera ordenada. Trabajaremos en *feature branches* para cada funcionalidad *(feature/app, feature/playground, feature/proyect)*.

<br>

### [GitHub](https://github.com/home)

#### ¿Qué es?
GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones [Git](#git). Se utiliza principalmente para la creación repositorios de código fuente de programas de ordenador.

#### Uso en App
Usamos GitHub para subir nuestra app a un repositorio de manera segura, guardando versiones, y compartir el código con los compañeros y profesores del Bootcamp, así como ver su código (incluso desde nuestro VSC).

<br>

### [HTML](https://developer.mozilla.org/es/docs/Web/HTML) *(HyperText Markup Language)*

#### ¿Qué es?
HTML **(Lenguaje de Marcas de Hipertexto)** es el componente más básico de la Web. Define el significado y la estructura del contenido web.

#### Uso en App
Usamos HTML para “pintar” nuestra app ya que es el lenguaje que entienden los navegadores, pero lo haremos usando JavaScript a través del DOM.
Tenemos un archivo ***index.html*** donde se encuentra la raíz (root) de nuestra App y desde dónde enlazamos al archivo *main.jsx* que enlaza con el resto de documentos necesarios para nuestra app. Dentro de estos archivos, la parte que “se pinta” y podemos ver en el navegador, siempre estará escrita con etiquetas HTML (```html <div>, <form>, <h1>, <button>...```).

<br>

### [HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) *(Hypertext Transfer Protocol)*

#### ¿Qué es?
**HTTP *(HyperText Transfer Protocol)* o Protocolo de Transferencia de Hipertexto**, es un protocolo de comunicación que permite la transferencia de información en la web. Es el fundamento de la comunicación entre navegadores y servidores. Funciona mediante solicitudes *(requests)* y respuestas *(responses)*, utilizando métodos como ```GET```, ```POST```, ```PUT``` o ```DELETE```.

**HTTPS** es la versión segura, que cifra los datos con *TLS (Transport Layer Security)* para proteger la información.

#### Uso en App
Usamos HTTP para hacer llamadas a las distintas rutas de nuestro servidor *(/login, /register, /landing, etc...)* y así navegar entre vistas, enviar datos en formularios, etc...

<br>

### [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) *(JS)*

#### ¿Qué es?
JavaScript *(JS)* es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase (las funciones son tratadas como cualquier otra variable). Si bien es más conocido como un **lenguaje de *scripting* (secuencias de comandos)** para páginas web, y es usado en muchos entornos fuera del navegador, tal como *Node.js*, Apache CouchDB y Adobe Acrobat.

#### Uso en App
Usamos JavaScript como el **lenguaje principal de nuestra App**, hasta el punto de que será el propio *JS* el que especifique a [HTML](#html-hypertext-markup-language) (a través del *DOM*) cómo y cuándo pintar elementos en pantalla.

<br>

### [Jira](https://www.atlassian.com/es/software/jira)

#### ¿Qué es?
Jira es una **herramienta de gestión de proyectos y seguimiento de incidencias** desarrollada por Atlassian. Se usa principalmente en desarrollo de *software* para *gestionar tareas, errores, sprints y proyectos ágiles* con metodologías como Scrum y Kanban.

Permite a los equipos planificar, rastrear y priorizar el trabajo, además de integrarse con otras herramientas como Confluence, Bitbucket y GitHub.

#### Uso en App
No usaremos Jira en el *bootcamp*, usaremos *issues* de [GitHub](#github).

<br>

### [JWT](https://jwt.io/) *(JSON Web Tokens)*

#### ¿Qué es?
JWT *(JSON Web Tokens)* es un **estándar para la autenticación y transmisión de información de forma segura entre partes en formato *JSON***. Se usa comúnmente en autenticación de *APIs* y sesiones de usuario.

Un *token JWT* tiene tres partes, separadas por puntos (.):

* ***Header* (Encabezado):** Contiene el tipo de *token* y el algoritmo de cifrado usado.
* ***Payload* (Cuerpo):** Contiene la información *(claims)* del usuario o la sesión.
* ***Signature* (Firma):** Se genera con una **clave secreta** para garantizar la integridad del *token*.

Ejemplo:
```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaWF0IjoxNjkxMjM0NTY3fQ.s5Gg5s3g5z3```

#### Uso en App
Utilizaremos *tokens* para iniciar y mantener la sesión iniciada protegiendo el *id* del ususario conectado. Para ello usaremos JWT en las rutas de nuestra *API*.

<br>

### [Middleware](www.xxx.com)

#### ¿Qué es?
Un middleware en [JavaScript](#javascript-js) (especialmente en [Node.js](#nodejs) con [Express](#express)) es una **función que se ejecuta entre la petición del cliente y la respuesta del servidor.** Se usa para modificar la petición, la respuesta o para ejecutar lógica antes de que se complete la solicitud.

Características:

* Tiene acceso a *req (request)*, *res (response)* y *next* (para pasar al siguiente middleware).
* Puede modificar *req* o *res* antes de que lleguen al manejador de rutas.
* Puede detener la ejecución *(res.send())* o continuar con *next()*.

#### Uso en App
Usaremos middleware en nuestra API en [Node.js](#nodejs) con [Express](#express), por ejemplo, nuestro *JSONBodyParser (express.json())* para procesar automáticamente las peticiones con cuerpo en formato *JSON*. Convierte el *JSON* recibido en un objeto [JavaScript](#javascript-js) accesible a través de ```req.body```.

<br>

### [MongoDB](https://www.mongodb.com/)

#### ¿Qué es?
MongoDB es una **base de datos *NoSQL* orientada a documentos**. En lugar de almacenar datos en tablas con filas y columnas como en bases de datos relacionales, **usa documentos en formato *BSON*** (similar a *JSON*).

Características principales:

* **No requiere esquema fijo**, lo que permite mayor flexibilidad en los datos.
* **Escalabilidad horizontal**, ideal para grandes volúmenes de datos.
* **Consultas potentes**, con filtros avanzados y agregaciones.
* **Alta disponibilidad**, gracias a la replicación de datos.

MongoDB es una **opción popular para aplicaciones web modernas**, incluyendo *APIs*, *big data* y microservicios.

#### Uso en App
Usaremos MongoDB como nuestra base de datos, donde almacenaremos los usuarios *(users)* y *posts*.

<br>

### [Mongoose](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [Node.js](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#%C2%BFqu%C3%A9_son_express_y_node)

#### ¿Qué es?
Node.js es un **entorno de ejecución de [JavaScript](#javascript-js)** multiplataforma, de código abierto y gratuito que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comando y *scripts*.

La ejecución en tiempo real está pensada para usarse fuera del contexto de un explorador web (es decir, ejecutarse directamente en una computadora o sistema operativo de servidor). Como tal, el entorno omite las [APIs](#api-application-programming-interface) de [JavaScript](#javascript-js) específicas del explorador web y añade soporte para [APIs](#api-application-programming-interface) de sistema operativo más tradicionales que incluyen [HTTP]() y bibliotecas de sistemas de ficheros, como [Express]().

#### Uso en App
Usamos Node.js, por ejemplo, para crear un servidor [HTTP]() (nuestra propia [API](#api-application-programming-interface)).

<br>

### [NPM]() *Node Package manager*

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [React](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [React Router DOM](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [SCM](https://developer.mozilla.org/en-US/docs/Glossary/SCM) *(Source Control Management)*

#### ¿Qué es?
Un SCM o **SCV (Sistema de Control de Versiones)** es un sistema para gestionar código fuente. Normalmente se refiere al uso de software para manejar versiones de ficheros fuente. Un programador puede modificar ficheros de código fuente sin miedo a eliminar código que funciona, porque un SCV realiza un seguimiento de cómo el código fuente ha cambiado y quién ha realizado los cambios.

#### Uso en App
Usamos el sistema de control de versiones Git para guardar las distintas versiones de nuestra App en local y subirla al repositorio GitHub.

<br>

### [Shell](https://es.wikipedia.org/wiki/Shell_(inform%C3%A1tica))

#### ¿Qué es?
Un *shell*, también conocido como **intérprete de órdenes o intérprete de comandos**, es un programa informático que proporciona una interfaz de usuario para acceder a los servicios del sistema operativo. Dependiendo del tipo de interfaz que empleen, los *shells* pueden ser de línea de texto (CLI, *Command-Line Interface*), gráficos (GUI, *Graphical User Interface*) o de lenguaje natural (NUI, *Natural User Interface*).

Los *shells* son necesarios para invocar o ejecutar los distintos programas disponibles en la computadora. En un sistema operativo, el *shell* actúa como intermediario entre el usuario y el *kernel* (nucleo), traduciendo las órdenes del usuario en llamadas al sistema que solicitan al *kernel* que realice una tarea específica.

#### Uso en App
Usaremos **Shell Bash** para interactuar con nuestra App y [Git](#git); y **PowerShell** para interactuar con nuestra base de datos MongoDB en Windows.

<br>

### [Surge](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [Tailwind CSS](https://tailwindcss.com/)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [TypeScript](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [Vite](www.xxx.com)

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App?

<br>

### [VSC](www.xxx.com) *(Visual Studio Code)*

#### ¿Qué es?
Visual Studio Code es un **editor de código fuente** desarrollado por Microsoft que ofrece soporte para múltiples lenguajes de programación y cuenta con características como autocompletado inteligente, resaltado de sintaxis, depuración directamente desde el editor y extensiones que amplían su funcionalidad.

#### Uso en App
Usamos VSC como editor de código para nuestra App.

<!-- <br>

### [TÉRMINO](https://www.url.com) *(XXX)*

#### ¿Qué es?
Definición

#### Uso en App
¿Para que lo usamos en nuestra App? -->
