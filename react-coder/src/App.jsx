// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Brief from './components/Brief/Brief';
import CartWidget from './components/CartWidget/CartWidget';

const App = () => {
    return (
        <Router>
            <Header />
            <CartWidget itemCount={0} /> {/* Reemplaza con el conteo real del carrito */}
            <Switch>
                <Route path="/" exact component={ItemListContainer} />
                <Route path="/catalogo" component={ItemListContainer} />
                <Route path="/producto/:id" component={ItemDetailContainer} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/brief" component={Brief} />
            </Switch>
        </Router>
    );
};

export default App;

