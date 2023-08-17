import React, { useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ListExpense from "./ListExpense";

const DailyExpenses = () => {
  const [item, setItem] = useState([]);
  const onInputData = (data) => {
    setItem((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <div>
      <ExpenseInput InputData={onInputData} />
      <h2 style={{ display: "flex", justifyContent: "center" }}>Expense</h2>
      <ListExpense items={item} />
    </div>
  );
};

export default DailyExpenses;
