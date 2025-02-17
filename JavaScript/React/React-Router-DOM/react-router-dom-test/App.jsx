// Este archivo gestiona las rutas y el estado de autenticación (isLoggedIn)

import { useState, useEffect } from 'react';
// Importamos componentes y funciones de React Router
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
    // Estado para controlar si el usuario está autenticado
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useLocation nos permite saber en qué ruta estamos
    const location = useLocation();

    // useEffect ejecuta un console.log cuando la URL cambia
    useEffect(() => {
        console.log(`Ruta actual: ${location.pathname}`);
    }, [location]); // Se ejecuta cada vez que la URL cambia

    return (
        <Routes>
            {/* Si el usuario ya está autenticado, Login lo redirige a Home */}
            <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={() => setIsLoggedIn(true)} />}
            />

            {/* Si el usuario NO está autenticado, cualquier intento de entrar a Home lo manda a Login */}
            <Route
                path="/"
                element={isLoggedIn ? <Home onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />}
            />
        </Routes>
    );
}

export default App;