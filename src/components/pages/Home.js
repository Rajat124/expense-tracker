import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/context";

let idToken = localStorage.getItem("token");

const Home = () => {
  const authCtx = AuthContext();

  const verifyEmail = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDYfusG2ykTFrcF5AZHX45XIWzd3ffeaEg",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMess = "failed";
            if (data && data.error && data.error.message) {
              errorMess = data.error.message;
            }
            throw new Error(errorMess);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        className="container"
      ></div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h4>Welcome to Expense Tracker!!!</h4>
        <h5>
          Your Profile is incomplete.
          <NavLink to="/profile">
            <Button>Complete Now</Button>
          </NavLink>
          <Button onClick={verifyEmail}>Verify Email</Button>
        </h5>
      </div>
    </div>
  );
};

export default Home;
