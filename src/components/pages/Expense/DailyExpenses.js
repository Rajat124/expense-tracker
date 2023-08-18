import React, { useEffect, useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ListExpense from "./ListExpense";

const DailyExpenses = () => {
  const [item, setItem] = useState([]);
  const onInputData = (data) => {
    setItem((prevState) => {
      return [...prevState, data];
    });
  };

  const expensGetFunction = () => {
    fetch(
      `https://expense-tracker-6affc-default-rtdb.firebaseio.com/expense.json`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let load = [];
        console.log(data);
        for (const key in data) {
          load.push({
            ckey: key,
            amount: data[key].amount,
            category: data[key].category,
            desc: data[key].desc,
            id: data[key].id,
          });
        }

        console.log(load);
        setItem(load);
      });
  };

  useEffect(() => {
    expensGetFunction();
  }, []);

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ExpenseInput InputData={onInputData} />
      <ListExpense items={item} />
    </div>
  );
};

export default DailyExpenses;
