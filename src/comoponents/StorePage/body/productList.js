import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useCart } from '../../../store/CartContext'; 
const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    albumName: 'Album 1',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    albumName: 'Album 2',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    albumName: 'Album 3',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    albumName: 'Album 4',
  },
];

function ProductList() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
   
  };

  return (
    <Container style={{ border: 'none' }}>
      <h1 className="text-center mb-5">MUSIC</h1>

      <Row className="justify-content-center">
        {productsArr.map((product, index) => (
          <Col key={index} md={6} lg={6} xl={6} className="mb-3 p-50">
            <Card style={{ border: 'none' }} className="px-5">
              <div className="text-center mt-5 mb-1">
                <h5>{product.albumName}</h5>
              </div>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Row className="align-items-center">
                  <Col>${product.price}</Col>
                  <Col xs="auto">
                    <Button
                      className="btn btn-primary"
                      variant="primary"
                      onClick={() => handleAddToCart(product)} // Add the product to the cart
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default ProductList;
