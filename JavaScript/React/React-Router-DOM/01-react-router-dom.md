# React Router DOM

## ¿Qué es React Router DOM?

[React Router DOM](../../../GLOSARIO.md#react-router-dom) es una **biblioteca para manejar la navegación** en aplicaciones [React](../../../GLOSARIO.md#react). Permite **definir rutas y cambiar de vista** sin recargar la página, creando una experiencia de aplicación de una sola página *(SPA)*.

## ¿Cómo funciona?

Veamos como funciona ejemplo muy básico.

### 1. Instalación

Instalamos [React Router DOM](../../../GLOSARIO.md#react-router-dom) en nuestro proyecto con el comando ```npm i react-router-dom```.

### 2. Definición de rutas

Definimos las rutas con ```<BrowserRouter>```, ```<Routes>``` y ```<Route>```.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 3. Navegación entre rutas

Navegamos entre rutas con ```<Link>``` o ```useNavigate()```.

```<Link>```
```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
```

```useNavigate()```
```jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>Ir a Acerca de</button>;
}
```

### 4. Uso de rutas dinámicas

Podemos usar rutas dinámicas, por ejemplo, en el detalle de un producto:

Dirigimos a ```Product.jsx``` con la ruta:

```jsx
<Route path="/product/:id" element={<Product />} />
```
Después, en ```Product.jsx```:

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return <h1>Producto ID: {id}</h1>;
}
```
