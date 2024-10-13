// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Si tienes estilos para el Header

const Header = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/cart">Carrito</Link>
        </nav>
    );
};

export default Header;
