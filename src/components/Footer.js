import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-success">
      <Container>
        <Row>
          <Col>
            <p>© {new Date().getFullYear()} Ecommerce</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
