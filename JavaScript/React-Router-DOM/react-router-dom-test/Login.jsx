// Este archivo simula un inicio de sesión y redirige al usuario a Home.jsx

// Importamos useNavigate para cambiar de página manualmente
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    // Hook para navegar entre rutas
    const navigate = useNavigate();

    // Función que se ejecuta cuando el usuario hace clic en "Iniciar sesión"
    const handleLogin = () => {
        onLogin(); // Llamamos a la función pasada desde App.jsx para cambiar isLoggedIn a true
        navigate('/'); // Redirigimos a la página Home
    };

    return (
        <div>
            <h1>🔑 Login</h1>
            <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
    );
}

export default Login;

// Claves:
// onLogin() proviene de App.jsx y cambia isLoggedIn a true.
// navigate('/') envía al usuario a Home.jsx tras iniciar sesión.