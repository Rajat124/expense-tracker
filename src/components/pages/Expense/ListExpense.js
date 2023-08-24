import React from "react";
import RederList from "./RederList";
import { Row } from "react-bootstrap";
import FileDownload from "./FileDownload";
import { useSelector } from "react-redux";

const ListExpense = (props) => {
  const Onfeatures = useSelector((state) => state.feature.Onfeatures);
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
    return item;
  });

  return (
    <ul>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Expenses List
      </h2>
      <Row>{Onfeatures && <FileDownload data={props.items} />}</Row>
      <h3>Food Items:</h3>
      <hr></hr>
      {Food.map((item) => {
        return (
          <RederList
            key={item.id} // Just to avoid key error
            id={item.id}
            ckey={item.ckey}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            onDelete={props.onDeleteItem}
            onUpdate={props.OnUpdateItem}
          />
        );
      })}
      <h3>Petrol Items:</h3>
      <hr></hr>
      {Petrol.map((item) => {
        return (
          <RederList
            key={item.id}
            id={item.id}
            ckey={item.ckey}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            onDelete={props.onDeleteItem}
            onUpdate={props.OnUpdateItem}
          />
        );
      })}
      <h3>Salary Items:</h3>
      <hr></hr>
      {Salary.map((item) => {
        return (
          <RederList
            key={item.id}
            id={item.id}
            ckey={item.ckey}
            amount={item.amount}
            desc={item.desc}
            category={item.category}
            onDelete={props.onDeleteItem}
            onUpdate={props.OnUpdateItem}
          />
        );
      })}
    </ul>
  );
};

export default ListExpense;
