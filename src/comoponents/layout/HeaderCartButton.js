import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../body/CartContext';

const HeaderCartButton = () => {
  const [show, setShow] = useState(false);
  const { cartItems, totalQuantity, totalAmount, removeFromCart } = useCart();

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Cart {totalQuantity}
      </Button>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {cartItems && cartItems.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th className="border-bottom">Item</th>
                  <th className="border-bottom">Price</th>
                  <th className="border-bottom">Quantity</th>
                  <th className="border-bottom">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.albumName}
                          style={{ width: '60px', height: '80px', marginRight: '10px' }}
                        />
                        <div className="row">
                          <h5  >{item.albumName}</h5>
                         
                        </div>
                      </div>
                    </td>
                    <td className="align-middle " style={{padding:"20px"}}>${item.price}</td>
                    <td className="align-middle">{item.quantity}</td>
                    <td className="align-middle">
                      <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="text-center">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            <button className="btn btn-success">Purchase</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HeaderCartButton;
