import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar({ screen }) {
  return (
    <Navbar bg="light" expand="md" className="shadow-sm mb-3">
      <Container>
        <Navbar.Brand className="fw-bold">🌍 Emoji Match World </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" activeKey={screen}>
            <Nav.Link eventKey="start" disabled>
              Home
            </Nav.Link>
            <Nav.Link eventKey="game" disabled>
              Play
            </Nav.Link>
            <Nav.Link eventKey="end" disabled>
              Results
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
