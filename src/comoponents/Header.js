import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
 const Header = ()=>{
   return (
    <>
      <Navbar bg="dark" data-bs-theme="dark"  fixed="top">
        <Container>
         
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='mx-5'>HOME</Nav.Link>
            <Nav.Link href="#store" className='mx-5'>STORE</Nav.Link>
            <Nav.Link href="#about" className='mx-5'>ABOUT</Nav.Link>
            
          </Nav>
         
        </Container>
        <Button variant="primary" className="  m-2">
            Cart
          </Button>
      </Navbar>
      
    </>
   )
 }
 export default Header;