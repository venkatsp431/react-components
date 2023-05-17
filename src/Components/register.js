import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

function Register() {
  const history = useHistory();
  function bodyColor() {
    document.body.style.backgroundColor = "blue";
    document.body.style.margin = "0 auto";
  }
  bodyColor();
  return (
    <div className="loginstyles">
      <h3>Welcome</h3>
      <Form className="login-form d-grid">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Row className="mb-0">
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Password Again</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          size="lg"
          variant="success"
          type="submit"
          onClick={() => history.push("/")}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Register;
