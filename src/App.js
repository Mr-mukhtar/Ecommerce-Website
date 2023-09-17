// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comoponents/HomePage/HomePage';
import Store from './comoponents/StorePage/Store';
import About from './comoponents/AboutPage/About';
import { CartProvider } from './comoponents/StorePage/body/CartContext';
function App() {
  return (
    <Router>
      <CartProvider>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
