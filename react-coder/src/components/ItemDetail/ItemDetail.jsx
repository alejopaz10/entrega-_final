// src/components/ItemDetail/ItemDetail.jsx
import React from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import AddItemButton from '../AddItemButton/AddItemButton';

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <ItemQuantitySelector />
            <AddItemButton product={product} />
        </div>
    );
};

export default ItemDetail;
