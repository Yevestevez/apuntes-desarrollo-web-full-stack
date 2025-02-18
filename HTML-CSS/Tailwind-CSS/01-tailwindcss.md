# Tailwind CSS

[tailwindcss.com](https://tailwindcss.com/)

## ¿Qué es Tailwind CSS?

[Tailwind CSS](../../GLOSARIO.md#tailwind-css) es un *framework* de [CSS](../../GLOSARIO.md#css-cascading-style-sheets) basado en **clases de utilidad**. En lugar de proporcionar componentes predefinidos, ofrece una serie de clases que permiten construir interfaces directamente en el propio [HTML](../../GLOSARIO.md#html-hypertext-markup-language) y esto ayuda a tener tanto estructura como diseño en el mismo sitio.

<br>

## Características principales

* **Enfoque utilitario:** Usa clases como ```flex, text-center, bg-blue-500``` para dar estilo sin escribir [CSS](../../GLOSARIO.md#css-cascading-style-sheets) personalizado.

* **Personalización fácil:** Se puede configurar mediante el archivo tailwind.config.js.

* **Optimización automática:** Elimina las clases no utilizadas en producción, reduciendo el tamaño del CSS.

* **Compatibilidad con *frameworks*:** Funciona bien con [React](../../GLOSARIO.md#react), Vue, Angular y más.

<br>

## Integración de Tailwind CSS con Vite

[tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

### 1. Instalación Tailwind CSS

Instalamos [Tailwind CSS](../../GLOSARIO.md#tailwind-css) en la carpeta raíz de nuestro proyecto (donde se encuentra nuestro *index.html*) mediante el comando ```npm i tailwindcss @tailwindcss/vite```.

### 2. Configuración del *plugin* Vite en el fichero *vite.config.js*

En el fichero ***vite.config.js*** importamos [Tailwind CSS](../../GLOSARIO.md#tailwind-css) y en ***plugins*** añadimos ***tailwindcss()***

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // importamos tailwindcss

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // añadimos tailwindcss() a plugins
})
 ```

### 3. Importación de Tailwind CSS en el fichero *main.css*

Importamos [Tailwind CSS](../../GLOSARIO.md#tailwind-css) en nuestro archivo *main.css*:

```css
import tailwindcss from "@tailwindcss/vite"
```

### 4. Enlace del archivo CSS con el HTML

Nuestro archivo [CSS](../../GLOSARIO.md#css-cascading-style-sheets) debe estar enlazado en la cabecera *(head)* de nuestro HTML: 

```html
<link href="/src/main.css" rel="stylesheet">
```

Ya podemos usar [Tailwind CSS](../../GLOSARIO.md#tailwind-css) directamente en el fichero [HTML](../../GLOSARIO.md#html-hypertext-markup-language). 

## Uso de Tailwind CSS

Con Tailwind CSS podemos especificar los estilos dentro de los propios elementos HTML. Simplemente añadimos el atributo ***class=""*** (***className=""*** si usamos [React](../../GLOSARIO.md#react)) en el elemento al que queramos añadir estilos, seguido de los estilos a la manera de [Tailwind CSS](../../GLOSARIO.md#tailwind-css):

```html
<h1 class="text-xl text-[yellow] bg-[dodgerblue] text-center">Hello world!</h1>
```

## Consejo

[Tailwind CSS](../../GLOSARIO.md#tailwind-css) dispone de un buscador muy potente en su página web [tailwindcss.com](https://tailwindcss.com) (que podemos abrir con el comando ```Ctrl K```) desde donde buscar las clases disponibles.