import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-5">
              HOME
            </Nav.Link>
            <Nav.Link href="#store" className="mx-5">
              STORE
            </Nav.Link>
            <Nav.Link href="#about" className="mx-5">
              ABOUT
            </Nav.Link>
          </Nav>
          <HeaderCartButton onClick={props.onShowCart} />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
