import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
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
  </Nav>
  )
}

export default Header
