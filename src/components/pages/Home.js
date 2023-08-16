import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h4>Welcome to Expense Tracker!!!</h4>
      <h5>
        Your Profile is incomplete.
        <NavLink to="/profile">
          <button>Complete Now</button>
        </NavLink>
      </h5>
    </div>
  );
};

export default Home;
