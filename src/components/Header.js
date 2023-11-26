import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar, ToggleButton } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../features/auth/authSlice";
import { featureAction } from "../features/feature/featureSlice";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiDarkreader } from "react-icons/si";

const Header = () => {
  const dispatch = useDispatch();
  const onFeatures = useSelector((state) => state.feature.Onfeatures);
  const darkMode = useSelector((state) => state.feature.darkmode);

  useEffect(() => {
    dispatch(authAction.refresh());
  }, [dispatch]);

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const isExpenseLimitOff = useSelector(
    (state) => state.expense.isExpenseLimitOff
  );

  const logOutHandler = () => {
    dispatch(authAction.logout());
    localStorage.removeItem("expenseAmount");
  };

  const activateFeatures = () => {
    dispatch(featureAction.activatefeature());
  };

  const toggleDarkMode = () => {
    dispatch(featureAction.toggleDarkMode());
  };

  return (
    <Navbar expand="lg" className="bg-info bg-body-tertiary">
      <Container>
        <Link to="/home">
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            Expense Tracker
          </Navbar.Brand>
        </Link>
        <Nav>
          {onFeatures && (
            <ToggleButton
              variant={darkMode ? "dark" : "light"}
              onClick={toggleDarkMode}
            >
              {darkMode ? <SiDarkreader /> : <MdOutlineDarkMode />}
            </ToggleButton>
          )}
          {isUserLoggedIn && isExpenseLimitOff && (
            <Button variant="success" onClick={activateFeatures}>
              Activate Premium
            </Button>
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
