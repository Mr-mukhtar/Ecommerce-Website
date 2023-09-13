import React from 'react';
import { Button, ListGroup, Container, Row, Col, Card } from 'react-bootstrap';
import Modal from '../UI/Modal';
const Cart = (props) => {
  const cartItems = (
    <ListGroup>
      {[
        {
          id: '1',
          name: 'Colors',
          price: 100,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
          quantity: 2,
        },
        {
          id: '2',
          name: 'Black and white Colors',
          price: 50,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
          quantity: 3,
        },
        {
          id: '3',
          name: 'Yellow and Black Colors',
          price: 70,
          imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
          quantity: 1,
        },
      ].map((item) => (
        <ListGroup.Item key={item.id}>
          <Container>
            <Row className="align-items-center">
              <Col>
                <Card>
                  <Card.Header>
                    <Row className="justify-content-center">
                      <img src={item.imageUrl} alt={item.name} style={{ padding: '10px', maxWidth: '80%' }} />
                    </Row>
                    <Row >{item.name}</Row>
                    <Row>${item.price}</Row>
                    <Row>Quantity: {item.quantity}</Row>
                  </Card.Header>
                </Card>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <Modal onClose={props.onClose}>
      <Container style={{ overflowY: "auto" }}>
        <h2 className="text-center mb-4">Your Cart</h2>
        <Container style={{ maxHeight: "250px", overflowY: "auto", padding: "40px", textAlign: "center" }} >{cartItems}</Container>
        <div>
          <Row className="total mt-8">
            <Col md={4} className="text-md-start"></Col>
            <Col md={6} className="text-md-end">
              <strong>Total Amount</strong>
              <strong> $35.62</strong>
            </Col>
          </Row>
          <Row className="actions text-end mt-4">
            <Col md={6}></Col>
            <Col md={6}>
              <Button variant="primary" className=" btn btn-lg">
                Order Now
              </Button>
              <Button variant="secondary" className="btn-lg ms-3" onClick={props.onClose}>
                Close
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Modal>
  );
};

export default Cart;
