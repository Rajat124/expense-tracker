import React, { useRef, useState } from "react";
import classes from "./Authform.module.css";
import { AuthContext } from "../../context/context";

const Authform = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const authCtx = AuthContext();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    if (enteredPassword === confirmPassword) {
      setLoading(true);
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYfusG2ykTFrcF5AZHX45XIWzd3ffeaEg";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYfusG2ykTFrcF5AZHX45XIWzd3ffeaEg";
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          confirmPassword: confirmPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMess = "Authencation failed";
              if (data && data.error && data.error.message) {
                errorMess = data.error.message;
              }
              throw new Error(errorMess);
            });
          }
        })
        .then((data) => {
          authCtx.login(data.idToken, data.email);
          console.log("User has successfully operation ");
          console.log(data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("password & confirm should be same");
    }
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <hr style={{ backgroundColor: "white" }}></hr>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            required
            ref={confirmPasswordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? " Login" : "Sign up"}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Don't have account? Sign Up" : "Have an account? Login"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Authform;
