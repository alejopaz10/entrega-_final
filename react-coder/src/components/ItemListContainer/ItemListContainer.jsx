// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulando una carga de productos
        const fetchProducts = async () => {
            const response = await fetch('/api/products'); // Cambia esta URL según tu API
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return <ItemList products={products} />;
};

export default ItemListContainer;
