// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import './CartWidget.scss';

const CartWidget = ({ itemCount }) => {
    return (
        <div className="cart-widget">
            <span>{itemCount}</span> Carrito
        </div>
    );
};

export default CartWidget;
