import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHistory } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FolderOutlined,
  LineChartOutlined,
  MessageOutlined,
  NotificationOutlined,
  SettingOutlined,
  TableOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Dropdown } from "react-bootstrap";

function Base({ children }) {
  const history = useHistory();

  const [arrow, setArrow] = useState(false);
  function handlerFunc() {
    const leftNav = document.querySelector(".left-nav");
    const leftsmallNav = document.querySelector(".left-small-nav");
    leftNav.classList.toggle("hidden");
    leftsmallNav.classList.toggle("hidden");
  }
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={1} className="left-small-nav hidden">
            <h3>SB Admin</h3>
            <hr></hr>
            <a onClick={() => history.push("/")} className="anchor-class pt-1">
              <DashboardOutlined /> Dashboard
            </a>
            <hr></hr>
            <p className="text-dark">Interface</p>
            <SettingOutlined />{" "}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Components"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => history.push("/buttons")}>
                Buttons
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/cards")}>
                Cards
              </NavDropdown.Item>
            </NavDropdown>
            <p></p>
            <hr></hr>
            <p className="text-dark">Add Ons</p>
            <FolderOutlined />{" "}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Pages"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => history.push("/login")}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/register")}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/error")}>
                404 Error
              </NavDropdown.Item>
            </NavDropdown>
            <p></p>
            <a
              className="anchor-class"
              onClick={() => history.push("/buttons")}
            >
              <LineChartOutlined /> Buttons
            </a>
            <p></p>
            <a className="anchor-class" onClick={() => history.push("/cards")}>
              <TableOutlined /> Cards
            </a>
            <hr></hr>
            <div className="toggler">
              {arrow ? (
                <ArrowRightOutlined
                  onClick={() => {
                    handlerFunc();
                    setArrow(!arrow);
                  }}
                />
              ) : (
                <ArrowLeftOutlined
                  onClick={() => {
                    handlerFunc();
                    setArrow(!arrow);
                  }}
                />
              )}
            </div>
          </Col>
          <Col md={2} className="left-nav">
            <h3>SB Admin</h3>
            <hr></hr>
            <a onClick={() => history.push("/")} className="anchor-class pt-1">
              <DashboardOutlined /> Dashboard
            </a>
            <hr></hr>
            <p className="text-dark">Interface</p>
            <SettingOutlined />{" "}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Components"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => history.push("/buttons")}>
                Buttons
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/cards")}>
                Cards
              </NavDropdown.Item>
            </NavDropdown>
            <p></p>
            <hr></hr>
            <p className="text-dark">Add Ons</p>
            <FolderOutlined />{" "}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Pages"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => history.push("/login")}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/register")}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => history.push("/error")}>
                404 Error
              </NavDropdown.Item>
            </NavDropdown>
            <p></p>
            <a
              className="anchor-class"
              onClick={() => history.push("/buttons")}
            >
              <LineChartOutlined /> Buttons
            </a>
            <p></p>
            <a className="anchor-class" onClick={() => history.push("/cards")}>
              <TableOutlined /> Cards
            </a>
            <hr></hr>
            <div className="toggler" onClick={handlerFunc}>
              {arrow ? (
                <ArrowRightOutlined onClick={() => setArrow(!arrow)} />
              ) : (
                <ArrowLeftOutlined onClick={() => setArrow(!arrow)} />
              )}
            </div>
          </Col>
          <Col md={10}>
            <Navbar bg="light" expand="lg">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#">
                      <Dropdown className="d-inline mx-2" drop="start">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                          <NotificationOutlined />
                          <sup className="bg-danger rounded">2</sup>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#">
                            <a
                              class="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                  <WechatOutlined />
                                </div>
                              </div>
                              <div>
                                <div class="small text-gray-500">
                                  December 12, 2019
                                </div>
                                <span class="font-weight-bold">
                                  A new monthly report is ready to download!
                                </span>
                              </div>
                            </a>
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <a
                              class="dropdown-item d-flex align-items-center"
                              href="#"
                            >
                              <div class="mr-3">
                                <div class="icon-circle bg-success">
                                  <DatabaseOutlined />
                                </div>
                              </div>
                              <div>
                                <div class="small text-gray-500">
                                  November 12, 2019
                                </div>
                                <span class="font-weight-bold">
                                  A new monthly report is ready to download!
                                </span>
                              </div>
                            </a>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav.Link>

                    <Nav.Link href="#" disabled>
                      <MessageOutlined />
                    </Nav.Link>
                    <Nav.Link href="#">Venkat</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>

            <div>{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Base;
