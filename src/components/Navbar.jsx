import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarCont } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => {
  return (
    <>
      <NavbarCont bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <NavbarCont.Brand>Navbar</NavbarCont.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </NavbarCont>
    </>
  );
};

export default Navbar;
