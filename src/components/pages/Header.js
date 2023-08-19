import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../context/context";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const authCtx = AuthContext();

  return (
    <Navbar expand="lg" className="bg-info bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>

        <Nav>
          {authCtx.isUserLoggedIn && (
            <NavLink to="/expense">
              <Button variant="success">Track Expenses</Button>
            </NavLink>
          )}
          {authCtx.isUserLoggedIn && (
            <NavLink to="/auth">
              <Button variant="danger" onClick={authCtx.logout}>
                Log Out
              </Button>
            </NavLink>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
