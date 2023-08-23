import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth";
// import { AuthContext } from "../../context/context";

const Header = () => {
  // const authCtx = AuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAction.refresh());
  }, []);

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const isExpenseLimitOff = useSelector(
    (state) => state.expense.isExpenseLimitOff
  );

  const logOutHandler = () => {
    dispatch(authAction.logout());
  };

  return (
    <Navbar expand="lg" className="bg-info bg-body-tertiary">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
        <Nav>
          {isUserLoggedIn && isExpenseLimitOff && (
            // <NavLink>
            <Button variant="success">Activate Premium</Button>
            // </NavLink>
          )}
          {isUserLoggedIn && (
            <NavLink to="/expense">
              <Button variant="success">Track Expenses</Button>
            </NavLink>
          )}
          {isUserLoggedIn && (
            <NavLink to="/auth">
              <Button variant="danger" onClick={logOutHandler}>
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
