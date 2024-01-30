import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import { Button } from 'react-bootstrap'
import { Col, Container, Row } from "react-bootstrap"; 

const Home = () => {
  return (
    
    <div>
         <Container className="p-4">
         <Row className="p-4">
        <Col className="text-center">
          <h1>Home </h1>
        </Col>
      </Row>
     <Row className='m-2'>
        <Col>JUL 16</Col>
        <Col>DETROIT ,MI</Col>
        <Col>
DTE ENERGY MUSIC THEATRE</Col>
<Col><Button className='btn-primary p-2'>BUY TICKETS</Button></Col>
     </Row>
     <Row className='m-2'>
        <Col>JUL 16</Col>
        <Col>DETROIT ,MI</Col>
        <Col>
DTE ENERGY MUSIC THEATRE</Col>
<Col><Button className='btn-primary p-2'>BUY TICKETS</Button></Col>
     </Row>
     <Row className='m-2'>
        <Col>JUL 16</Col>
        <Col>DETROIT ,MI</Col>
        <Col>
DTE ENERGY MUSIC THEATRE</Col>
<Col><Button className='btn-primary p-2'>BUY TICKETS</Button></Col>
     </Row>
     <Row className='m-2'>
        <Col>JUL 16</Col>
        <Col>DETROIT ,MI</Col>
        <Col>
DTE ENERGY MUSIC THEATRE</Col>
<Col><Button className='btn-primary p-2'>BUY TICKETS</Button></Col>
     </Row>
     
    </Container>
    </div>
  )
}

export default Home