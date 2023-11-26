import React from "react";
import RederList from "./RederList";
import { Row } from "react-bootstrap";
import FileDownload from "./FileDownload";
import { useSelector } from "react-redux";

const ListExpense = (props) => {
  const onFeatures = useSelector((state) => state.feature.Onfeatures);
  let food = [];
  let petrol = [];
  let salary = [];

  props.items.map((item) => {
    if (item.category === "food") {
      food.push(item);
    } else if (item.category === "petrol") {
      petrol.push(item);
    } else {
      salary.push(item);
    }
    return item;
  });

  return (
    <ul>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Expenses List
      </h2>
      <Row>{onFeatures && <FileDownload data={props.items} />}</Row>
      <h3>Food Items:</h3>
      <hr></hr>
      {food.map((item) => {
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
      {petrol.map((item) => {
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
      {salary.map((item) => {
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
