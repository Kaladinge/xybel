import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/xybel-logo.png";

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg" className="py-0">
      <Container>
        <NavLink to="/" className="d-lg-none">
          <Navbar.Brand>Mobile</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex justify-content-between w-100">
            <Navbar.Brand className="d-none d-lg-block border">
              <img
                src={logo}
                alt="desktop-logo"
                className="desktop-logo--image"
              />
            </Navbar.Brand>

            <div className="border align-items-center">
              <NavLink to="/modules" className="mx-5 border">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
