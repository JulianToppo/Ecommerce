import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="p-4">
      <Row className="p-4">
        <Col className="text-center">
          <h1>About </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg"
            className="w-50"
          ></img>
        </Col>
        <Col>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quae,
          incidunt quas dolorum illo nostrum nulla quod impedit suscipit rem,
          nobis cum ipsa vitae vero amet et. Laborum, eligendi omnis.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
