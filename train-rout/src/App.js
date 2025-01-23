import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Category/minuman">Minuman</NavDropdown.Item>
              <NavDropdown.Item href="/Category/makanan">
                Makanan
              </NavDropdown.Item>
              <NavDropdown.Item href="/Category/cemilan">Cemilan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Category">
                Semuanya
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Outlet />
    </div>
  );
}

export default App;
