import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.imageUrl} />
        <div className="mt-4 d-flex justify-content-around">
            <Card.Text>
         ${props.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
