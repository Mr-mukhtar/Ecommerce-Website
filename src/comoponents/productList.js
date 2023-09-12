import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    albumName: 'Album 1',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    albumName: 'Album 2',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    albumName: 'Album 3',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    albumName: 'Album 4',
  },
];

function ProductList() {
  return (
    <Container style={{border:"none"}}>
      <h1 className="text-center mb-5">MUSIC</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} md={5} lg={7} xl={3} className="mb-3">
            <Card style={{border:"none", scale:"50px"}}>
              <div className="text-center mt-5 mb-1">
                <h5>{product.albumName}</h5>
              </div>
              <Card.Img variant="top" src={product.imageUrl}  />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Row className="align-items-center">
                  <Col>${product.price}</Col>
                  <Col xs="auto">
                    <Button size="sm" variant="primary">
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
