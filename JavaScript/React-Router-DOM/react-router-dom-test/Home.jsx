// Este archivo muestra la página Home y permite cerrar sesión

// Importamos useNavigate para cambiar de página manualmente
import { useNavigate } from 'react-router-dom';

function Home({ onLogout }) {
    // Hook para navegar entre rutas
    const navigate = useNavigate();

    // Función que se ejecuta cuando el usuario hace clic en "Cerrar sesión"
    const handleLogout = () => {
        onLogout(); // Llamamos a la función pasada desde App.jsx para cambiar isLoggedIn a false
        navigate('/login'); // Redirigimos a la página de Login
    };

    return (
        <div>
            <h1>🏠 Home</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
}

export default Home;

// Claves:
// onLogout() proviene de App.jsx y cambia isLoggedIn a false.
// navigate('/login') envía al usuario de vuelta a Login.jsx.