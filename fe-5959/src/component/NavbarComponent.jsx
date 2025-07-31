import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { links } from "../data/data";
import { Link } from "react-router-dom";
import '../scss/NavbarComponent.scss';

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">React Projesi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto d-flex align-items-center gap-4">
            {links.map((link) => (
              <Nav.Link
                as={Link}
                to={link.href}
                key={link.id}
                className={link.name === "Hakkımızda" ? "about-hover" : undefined}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
