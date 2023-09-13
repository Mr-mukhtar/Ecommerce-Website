import React from 'react';
import { Button } from 'react-bootstrap';

const HeaderCartButton = (props) => {
  return (
    <Button variant="primary" className="m-2" onClick={props.onClick}>
      Cart
    </Button>
  );
};

export default HeaderCartButton;
