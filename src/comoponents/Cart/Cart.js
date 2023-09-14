import React from 'react';
import { Button, Card } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Cart() {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartElements.map((product, index) => (
        <Card key={index} className="cart-item">
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <Button variant="danger">Remove</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
