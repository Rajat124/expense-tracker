import React, { useCallback, useEffect, useState } from "react";
import ExpenseInput from "./ExpenseInput";
import ListExpense from "./ListExpense";

const DailyExpenses = () => {
  const [items, setItem] = useState([]);
  const [persistData, setPersistData] = useState(null);
  const [itemIdx, setItemIdx] = useState(null);
  const [isItemUpdate, setisItemUpdate] = useState(false);
  const [ckey, setclickedItemCkey] = useState("");

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
  }, [items.length]);

  const onInputData = (data) => {
    setItem((prevState) => {
      return [...prevState, data];
    });
  };

  const onupdatedData = (data) => {
    console.log(data);

    setItem((prevState) => {
      let updatedListItem = [...prevState];
      let updatedItem = { ckey, ...data };

      if (itemIdx !== null) {
        updatedListItem[itemIdx] = updatedItem;
        return updatedListItem;
      }
    });

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

  const deleteItemHandler = (itemId, ckey) => {
    console.log(itemId, ckey);

    setItem((prevlist) => prevlist.filter((item) => item.id !== itemId));

    fetch(
      `https://expense-tracker-6affc-default-rtdb.firebaseio.com/expense/${ckey}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const updateItemHandler = (item) => {
    console.log(item);
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
