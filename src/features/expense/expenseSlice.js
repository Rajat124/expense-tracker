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
    },
    deleteTheAmount(state, actions) {
      state.expenseAmount = state.expenseAmount - actions.payload;
    },
    updateTheAmount(state, actions) {
      state.expenseAmount =
        state.expenseAmount - actions.payload.prevItemAmount;
      state.expenseAmount =
        state.expenseAmount + actions.payload.currentItemAmount;
    },

    retriveAmount(state, actions) {
      state.expenseAmount = actions.payload;
    },
    updateAccToExpense(state, actions) {
      state.isExpenseLimitOff = actions.payload;
    },
  },
});

export const expenseAction = expenseSlice.actions;

export default expenseSlice;
