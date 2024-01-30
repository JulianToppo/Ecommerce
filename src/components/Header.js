import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import CartContext from '../utils/CartContext';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const cartcontext=useContext(CartContext);
  
  const toggleCartItem=(e)=>{
    e.preventDefault();
    console.log("toggle")
    cartcontext.toggleShow();
  }

  console.log("show",cartcontext.show)

  return (
    <Nav className="justify-content-center bg-dark text-white p-2" activeKey="/home">
    <Nav.Item>
      <Nav.Link className='text-white' href="/home">HOME</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-white'  eventKey="link-1">STORE</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='text-white'  eventKey="link-2">ABOUT</Nav.Link>
    </Nav.Item>
    <div className='d-flex justify-content-end '>
       
      <Button className='text-white' onClick={toggleCartItem}>CART</Button>
   
    </div>
 
  </Nav>
  )
}

export default Header
