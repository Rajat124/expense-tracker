import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenseAmount: 0,
  isExpenseLimitOff: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenseState,
  reducers: {
    addingTheAmount(state, actions) {
      state.expenseAmount = state.expenseAmount + actions.payload;
      if (state.expenseAmount >= 10000) {
        state.isExpenseLimitOff = true;
      }
      console.log(state.isExpenseLimitOff);

      console.log(state.expenseAmount);
    },
    deleteTheAmount(state, actions) {
      state.expenseAmount = state.expenseAmount - actions.payload;
      console.log(state.expenseAmount);
    },
    updateTheAmount(state, actions) {
      //   console.log(actions.payload);

      state.expenseAmount =
        state.expenseAmount - actions.payload.prevItemAmount;
      state.expenseAmount =
        state.expenseAmount + actions.payload.currentItemAmount;

      if (state.expenseAmount < 10000) {
        state.isExpenseLimitOff = false;
      }
      console.log(state.expenseAmount);
    },
  },
});

export const expenseAction = expenseSlice.actions;

export default expenseSlice;
