# Ejemplo de app con varios archivos .jsx

En [este ejemplo](../react-router-dom-test/) veremos una sencilla app en la que podemos hacer login para acceder a la *home* (solo navegación) y los siguiente elementos:

* ***BrowserRouter*** → Envuelve la app para habilitar [React Router DOM](../../../GLOSARIO.md#react-router-dom) en *main.jsx*.
* ***Routes y Route*** → Definen las rutas en *App.jsx*.
* ***Navigate*** → Redirige automáticamente según si el usuario está autenticado.
* ***useNavigate()*** → Permite cambiar de ruta manualmente en *Login.jsx* y *Home.jsx*.
* ***useLocation()*** + ***useEffect()*** → Muestra la ruta actual en consola.
* ***useState()*** → Maneja el estado de autenticación *(isLoggedIn*).