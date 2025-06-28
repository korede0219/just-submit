import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const MyNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={Link}>Awesome Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>
            <Nav.Link to="/menu" as={Link}>Menu</Nav.Link>
            <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
           

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Branch</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">News Letter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Free Gift
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBar