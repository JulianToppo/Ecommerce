import React, { useContext, useEffect, useState } from "react";
import CartContext from "../utils/CartContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";

const Cart = () => {
  const cartcontext = useContext(CartContext);
  const [cartElem, setcartElem] = useState([]);

  useEffect(() => {
    setcartElem(cartcontext?.cartItems);
    console.log(cartElem);
  }, [cartcontext.cartItems]);

  return (
    <div>
      <Offcanvas
        show={cartcontext.show}
        onHide={() => cartcontext.toggleShow()}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Cart</h1>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                 
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartElem?.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  );
                })}
                Total: 2000
              </tbody>
            </table>
          </div>

          <Button>Purchase</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
