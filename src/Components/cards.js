import React from "react";
import Base from "../Base/base";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Container } from "react-bootstrap";

export default function Cards() {
  function bodyColor() {
    document.body.style.backgroundColor = "#f5f5f5";
  }
  bodyColor();
  return (
    <Base>
      <div className="background-area">
        <Container>
          <h3>Cards</h3>
          <div className="progressBar">
            <Card>
              <Card.Body>
                <h4>Cards Example</h4>
              </Card.Body>
            </Card>
          </div>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  );
}
