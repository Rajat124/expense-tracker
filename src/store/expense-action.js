import { expenseAction } from "./expense";

export const expenseCount = (expenseAmount) => {
  return (dispatch) => {
    localStorage.setItem("expenseAmount", expenseAmount);

    const totalAmount = localStorage.getItem("expenseAmount");
    if (totalAmount >= 10000) {
      dispatch(expenseAction.updateAccToExpense(true));
    } else if (totalAmount < 10000) {
      dispatch(expenseAction.updateAccToExpense(false));
    }
  };
};

export const expenseRetrive = () => {
  return (dispatch) => {
    const totalAmount = localStorage.getItem("expenseAmount");
    dispatch(expenseAction.retriveAmount(totalAmount));
  };
};
