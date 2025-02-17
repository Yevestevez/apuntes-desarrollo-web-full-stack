// Este archivo inicializa React y envuelve la app con <BrowserRouter>

import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos BrowserRouter para habilitar React Router
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Creamos el root de React y renderizamos la aplicación dentro de <Router>
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <App /> {/* Toda la app tiene acceso a React Router */}
    </Router>
);