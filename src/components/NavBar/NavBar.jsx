
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="warning" variant="dark" className="me-3 ms-0">
      <Container>
        <Navbar.Brand>
          <Link to="/">TrendyThreads</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/category/Hombre">Hombre</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/category/Mujer">Mujer</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;