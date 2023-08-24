import React, { useEffect } from "react";
import Header from "./pages/Header";
import classes from "./Root.module.css";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../store/expense";

const Root = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseAction.retriveAmount());
  }, [dispatch]);

  const darkMode = useSelector((state) => state.feature.darkmode);

  return (
    <div className={`${darkMode ? classes.darkmode : classes.lightmode}`}>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Root;

// className={}
