import React from "react";
import Base from "../Base/base";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

export default function Dashboard() {
  function bodyColor() {
    document.body.style.backgroundColor = "#f5f5f5";
  }
  bodyColor();
  return (
    <Base>
      <div className="background-area">
        <h3>Dashboard</h3>
        <div className="progressBar">
          <Row>
            <Col>
              <div className="dash-box1">
                <p>Earnings Monthly</p>
                <h3>$400</h3>
              </div>
            </Col>
            <Col>
              <div className="dash-box2">
                <p>Earnings Monthly</p>
                <h3>$400</h3>
              </div>
            </Col>
            <Col>
              <div className="dash-box3">
                <p>Earnings Monthly</p>
                <h3>$400</h3>
              </div>
            </Col>
            <Col>
              <div className="dash-box4">
                <p>Earnings Monthly</p>
                <h3>$400</h3>
              </div>
            </Col>
          </Row>
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
