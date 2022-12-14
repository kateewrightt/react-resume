import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "react-helmet";

function Navigation() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/react-resume/">Kate's Showcase:</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/react-resume/">Skills</Nav.Link>
            <Nav.Link href="/react-resume/#/ambitions">Ambitions</Nav.Link>
            <Nav.Link href="/react-resume/#/experience">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown title="Have a Look" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/kateewrightt">
                My GitHub
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/kate-wright-profile/">
                My LinkedIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
