// Store.js
import React from 'react';
import Generic from './body/Generic';
import ProductList from './body/productList';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { CartProvider } from './body/CartContext';

const Store = () => {
  return (
    <CartProvider>
      <Header />
      <br/>
      <Generic />
      <ProductList />
      <Footer />
    </CartProvider>
  );
}

export default Store;