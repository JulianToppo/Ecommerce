import React from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './MusicAlbums.css'
import Button from 'react-bootstrap/Button';

const MusicAlbums = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
    <Container fluid className="p-3 pt-5  d-flex flex-column align-items-center main-container" >
      <h1 className="metal-font">Music</h1>
      <Row className="d-flex flex-wrap justify-content-center ">
        {productsArr.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-5 mx-5">
            <ProductCard title={item.title} price={item.price} imageUrl={item.imageUrl} />
          </Col>
        ))}
      </Row>
      <Button variant="primary" size="lg">
        See the cart
      </Button>
    </Container>
    
    </>
  );
};

export default MusicAlbums;
