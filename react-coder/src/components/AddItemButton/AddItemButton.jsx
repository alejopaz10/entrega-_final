// src/components/AddItemButton/AddItemButton.jsx
import React from 'react';

const AddItemButton = ({ product }) => {
    const handleAddToCart = () => {
        // Lógica para agregar al carrito
        console.log(`Agregado ${product.name} al carrito`);
    };

    return <button onClick={handleAddToCart}>Agregar al Carrito</button>;
};

export default AddItemButton;
