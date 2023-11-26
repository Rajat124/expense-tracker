import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

let idToken = localStorage.getItem("token");
const API_KEY = process.env.REACT_APP_AUTH_API_KEY;

const Home = () => {
  const verifyEmail = () => {
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4>Welcome to Expense Tracker!!!</h4>
        <h6
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Your Profile is incomplete.
          <NavLink to="/profile">
            <Button>Complete Now</Button>
          </NavLink>
          <Button onClick={verifyEmail}>Verify Email</Button>
        </h6>
      </div>
    </div>
  );
};

export default Home;
