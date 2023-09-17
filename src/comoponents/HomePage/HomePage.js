import React from 'react';
import Footer from '../StorePage/layout/Footer';
import Header from '../StorePage/layout/Header';
import { Container, Card } from 'react-bootstrap';
import ListItem from './ListItem';

const Home = () => {
  return (
    <div>
      <Header />
      <Container fluid className="bg-secondary" style={{ height: '400px' }}>
        <h1
          className="text-center m-5"
          style={{ fontWeight: '700', color: 'white', fontSize: '90px' }}
        >
          The Generics
        </h1>
        <Card className="w-25 mx-auto p-3" style={{ backgroundColor: 'transparent', borderColor:"blue"}}>
          <Card.Body className="text-center" style={{ fontWeight: '200', color: 'white' }}>
            Get our Latest Album
          </Card.Body>
        </Card>
      </Container>
      <h1 className="text-center m-3">TOUR</h1>
      <ListItem/>
      <Footer />
    </div>
  );
};

export default Home;
