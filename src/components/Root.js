import React, { useEffect } from "react";
import Header from "./Header";
import classes from "./Root.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  expenseCount,
  expenseRetrive,
} from "../store/reducers/expenseActionReducer";

const Root = (props) => {
  const expenseAm = useSelector((state) => state.expense.expenseAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseRetrive());
  }, [dispatch]);

  useEffect(() => {
    dispatch(expenseCount(expenseAm));
  }, [dispatch, expenseAm]);

  const darkMode = useSelector((state) => state.feature.darkmode);

  return (
    <div className={`${darkMode ? classes.darkmode : classes.lightmode}`}>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Root;
