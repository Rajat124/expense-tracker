import React from "react";
import RederList from "./RederList";

const ListExpense = (props) => {
  let Food = [];
  let Petrol = [];
  let Salary = [];

  props.items.map((item) => {
    if (item.category === "Food") {
      Food.push(item);
    } else if (item.category === "Petrol") {
      Petrol.push(item);
    } else {
      Salary.push(item);
    }
  });

  return (
    <ul>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Expenses List
      </h2>
      <h3>Food Items:</h3>
      <hr></hr>
      {Food.map((item) => {
        return (
          <RederList
            key={item.id} // Just to avoid key error
            // itemkey={item.key}
            id={item.id}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            // onDelete={props.onDeleteItem}
          />
        );
      })}
      <h3>Petrol Items:</h3>
      <hr></hr>
      {Petrol.map((item) => {
        return (
          <RederList
            key={item.id}
            // itemkey={item.key}
            id={item.id}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            // onDelete={props.onDeleteItem}
          />
        );
      })}
      <h3>Salary Items:</h3>
      <hr></hr>
      {Salary.map((item) => {
        return (
          <RederList
            key={item.id}
            // itemkey={item.key}
            id={item.id}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            // onDelete={props.onDeleteItem}
          />
        );
      })}
    </ul>
  );
};

export default ListExpense;
