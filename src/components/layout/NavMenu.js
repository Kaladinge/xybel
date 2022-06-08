import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="d-lg-none">
          <Navbar.Brand>Mobile</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto d-flex justify-content-between border w-100">
            <NavLink to="/" className="d-none d-lg-block">
              <Navbar.Brand>Desktop</Navbar.Brand>
            </NavLink>
            <div>
              <NavLink to="/modules" className="me-5">
                Modules
              </NavLink>
              <NavLink to="/services" className="me-5">
                Services
              </NavLink>
              <NavLink to="/blog" className="me-5">
                Blog
              </NavLink>
              <NavLink to="/pricing" className="me-5">
                Pricing
              </NavLink>
              <NavLink to="/contact" className="me-5">
                Contact
              </NavLink>
            </div>
            <NavLink to="/login">Login</NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
