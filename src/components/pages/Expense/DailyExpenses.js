import React, { useEffect, useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ListExpense from "./ListExpense";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../../../store/expense";

const DailyExpenses = () => {
  const [items, setItem] = useState([]);
  const [persistData, setPersistData] = useState(null);
  const [itemIdx, setItemIdx] = useState(null);
  const [isItemUpdate, setisItemUpdate] = useState(false);
  const [ckey, setclickedItemCkey] = useState("");
  const [previousItemAmount, setPreviousItemAmount] = useState(null);

  const dispatch = useDispatch();

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
        for (const key in data) {
          load.push({
            ckey: key,
            amount: data[key].amount,
            category: data[key].category,
            desc: data[key].desc,
            id: data[key].id,
          });
        }
        setItem(load);
      });
  };

  console.log(items);

  useEffect(() => {
    expensGetFunction();
  }, []);

  const onInputData = (data) => {
    setItem((prevState) => {
      return [...prevState, data];
    });
  };

  const onupdatedData = (data) => {
    let prevItemAmount = [...items];
    setItem((prevState) => {
      let updatedListItem = [...prevState];
      let updatedItem = { ckey, ...data };

      if (itemIdx !== null) {
        updatedListItem[itemIdx] = updatedItem;
        console.log(updatedListItem[itemIdx].amount);
        return updatedListItem;
      }
    });

    dispatch(
      expenseAction.updateTheAmount({
        prevItemAmount: prevItemAmount[itemIdx].amount / 1,
        currentItemAmount: data.amount / 1,
      })
    );

    fetch(
      `https://expense-tracker-6affc-default-rtdb.firebaseio.com/expense/${ckey}.json`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );
    setisItemUpdate(false);
    setclickedItemCkey("");
  };

  const deleteItemHandler = (items) => {
    dispatch(expenseAction.deleteTheAmount(items.amount / 1));

    console.log(items.id, items.ckey);

    setItem((prevlist) => prevlist.filter((item) => item.id !== items.id));

    fetch(
      `https://expense-tracker-6affc-default-rtdb.firebaseio.com/expense/${items.ckey}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const updateItemHandler = (item) => {
    // console.log(item);
    setPersistData({ ...item });

    setclickedItemCkey(item.ckey);

    let existingEleIdx = items.findIndex((el) => el.id === item.id);
    setItemIdx(existingEleIdx);
    setisItemUpdate(true);
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <ExpenseInput
        InputData={onInputData}
        updatedData={onupdatedData}
        persistData={persistData}
        isItemUpdate={isItemUpdate}
      />
      <ListExpense
        items={items}
        onDeleteItem={deleteItemHandler}
        OnUpdateItem={updateItemHandler}
      />
    </div>
  );
};

export default DailyExpenses;
