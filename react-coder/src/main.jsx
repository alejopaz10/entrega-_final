import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'; // o cualquier archivo de estilos que estés usando

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
