import React from "react";
import Base from "../Base/base";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Buttons() {
  function bodyColor() {
    document.body.style.backgroundColor = "#f5f5f5";
  }
  bodyColor();
  return (
    <Base>
      <div className="background-area">
        <h3>Buttons Page</h3>
        <div className="progressBar">
          <Card>
            <Card.Body>
              <Button variant="primary">Primary</Button>{" "}
              <Button variant="secondary">Secondary</Button>{" "}
              <Button variant="success">Success</Button>{" "}
              <Button variant="warning">Warning</Button>{" "}
              <Button variant="danger">Danger</Button>{" "}
              <Button variant="info">Info</Button>{" "}
              <Button variant="light">Light</Button>
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
                  With supporting text below as a natural lead-in to additional
                  content.
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
                  With supporting text below as a natural lead-in to additional
                  content.
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
                  With supporting text below as a natural lead-in to additional
                  content.
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
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Base>
  );
}
