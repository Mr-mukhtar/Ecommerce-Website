import React, { useState } from 'react';
import Store from '../StorePage/Store';
import Cart from '../Cart/Cart';

const StorePage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Store onShowCart={showCartHandler} />
      <Cart show={cartIsShown} onClose={hideCartHandler} />
    </div>
  );
};

export default StorePage;
