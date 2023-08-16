import React from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";

import CartWidgetComponent from "../CartWidget/CartWidgetComponent";

function NavScrollExample() {
  return (
    <Navbar id="NavBarColor" expand="lg" className="bg-warning">
      <Container fluid>
        <Navbar.Brand href="#" className="text-danger">
          TrendyThreads{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-dark">
              Ofertas
            </Nav.Link>
            <Nav.Link href="#action2" className="text-dark">
              Novedades
            </Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item
                href="#action3"
                className="text-dark bg-warning"
              >
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action4"
                className="text-dark bg-warning"
              >
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                className="text-dark bg-warning"
              >
                Niños
              </NavDropdown.Item>
            </NavDropdown>

            <div className="d-flex align-items-center ms-5">
              <Form className="mb-0">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button variant="outline-danger" className="ms-4">
                Search
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidgetComponent />
    </Navbar>
  );
}

export default NavScrollExample;
