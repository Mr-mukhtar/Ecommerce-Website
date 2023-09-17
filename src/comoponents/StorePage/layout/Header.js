// Header.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link mx-5">HOME</NavLink>
            <NavLink to="/store" className="nav-link mx-5">STORE</NavLink>
            <NavLink to="/about" className="nav-link mx-5">ABOUT</NavLink>
          </Nav>
          <HeaderCartButton />
        </Container>
        
      </Navbar>
      
    </header>
  );
};

export default Header;