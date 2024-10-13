// src/components/ItemQuantitySelector/ItemQuantitySelector.jsx
import React, { useState } from 'react';

const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <input type="number" value={quantity} onChange={handleChange} min="1" />
    );
};

export default ItemQuantitySelector;
