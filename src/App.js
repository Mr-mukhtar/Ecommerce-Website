import React, {Fragment, useState } from 'react';

import Generic from './comoponents/body/Generic';
import ProductList from './comoponents/body/productList';
import Footer from './comoponents/layout/Footer';
import Header from './comoponents/layout/Header';
import Cart from './comoponents/Cart/Cart';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
   
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
   
    setCartIsShown(false);
  };
  

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <br />
      
      <Generic />
      <ProductList />
      <Footer />
    
    </Fragment>
  );
}

export default App;
