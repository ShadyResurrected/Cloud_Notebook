import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar as NavbarCont } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation(); // Used to fetch the pathname of the current page

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
