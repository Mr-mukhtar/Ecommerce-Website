// MainHeader.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Cart from '../Cart/Cart'; 
import {Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';


const MainNavigation = (props) => {
  const location = useLocation();

  // Function to determine if the current route is "/store"
  const isStoreRoute = () => {
    return location.pathname === '/store';
  };

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
    // redirect the user
  };


  return (
    <header >
     <Navbar bg="dark" variant="dark" fixed="top">
     <Container>
          <Nav className="mx-auto">
      
          
            <NavLink to="welcome" className="nav-link mx-5">
              HOME
            </NavLink>
         {!isLoggedIn && (
            <NavLink to="/store" className="nav-link mx-5">
              STORE
            </NavLink>
            )}
              {isLoggedIn && (
            <NavLink to="/store" className="nav-link mx-5">
              STORE
            </NavLink>
              )}
            <NavLink to="/about"className="nav-link mx-5">
              ABOUT
            </NavLink>
            {!isLoggedIn && (
            <NavLink to="/auth" className="nav-link mx-5">
              LOGIN
            </NavLink>
              )}
          {isLoggedIn && (
            
              <Button style={{backgroundColor:"transparent" , border:"none"}} onClick={logoutHandler}>Logout</Button>
           
          )}
          </Nav>
    

     
      {isStoreRoute() && <Cart />}
      </Container>
      </Navbar>
      <br/>
    </header>
  );
};

export default MainNavigation;
