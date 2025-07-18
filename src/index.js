import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n';
import { SearchFilterProvider } from './context/SearchFilterContext'
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchFilterProvider>
      <CartProvider >
        <App />
      </CartProvider>
    </SearchFilterProvider>
  </React.StrictMode>
);