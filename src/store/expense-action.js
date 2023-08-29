// import { expenseAction } from "./expense";

// export const expenseCount = (expenseAmount) => {
//   //   console.log(expenseAmount);

//   return () => {
//     // if (expenseAmount > 0) {
//     const storeData = localStorage.getItem("expenseAmount");
//     // console.log(JSON.parse(storeData));

//     // if (storeData) {
//     //   localStorage.removeItem("expenseAmount");
//     //   //   localStorage.setItem("expenseAmount", expenseAmount);
//     // }

//     // }
//   };
// };

// export const expenseRetrive = () => {
//   return (dispatch) => {
//     const totalAmount = localStorage.getItem("expenseAmount");
//     dispatch(expenseAction.retriveAmount(totalAmount));
//     // console.log(totalAmount);

//     if (totalAmount >= 10000) {
//       dispatch(expenseAction.updateAccToExpense(true));
//     } else if (totalAmount < 10000) {
//       dispatch(expenseAction.updateAccToExpense(false));
//     }
//   };
// };
