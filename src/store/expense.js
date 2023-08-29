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
      localStorage.setItem("expenseAmount", state.expenseAmount);

      if (state.expenseAmount >= 10000) {
        state.isExpenseLimitOff = true;
      } else if (state.expenseAmount < 10000) {
        state.isExpenseLimitOff = false;
      }
    },
    deleteTheAmount(state, actions) {
      state.expenseAmount = state.expenseAmount - actions.payload;
      localStorage.setItem("expenseAmount", state.expenseAmount);

      if (state.expenseAmount >= 10000) {
        state.isExpenseLimitOff = true;
      } else if (state.expenseAmount < 10000) {
        state.isExpenseLimitOff = false;
      }
    },
    updateTheAmount(state, actions) {
      state.expenseAmount =
        state.expenseAmount - actions.payload.prevItemAmount;
      state.expenseAmount =
        state.expenseAmount + actions.payload.currentItemAmount;
      localStorage.setItem("expenseAmount", state.expenseAmount);

      if (state.expenseAmount >= 10000) {
        state.isExpenseLimitOff = false;
      } else if (state.expenseAmount < 10000) {
        state.isExpenseLimitOff = false;
      }
    },

    retriveAmount(state) {
      const expenseAmount = localStorage.getItem("expenseAmount");
      state.expenseAmount = expenseAmount;

      if (state.expenseAmount >= 10000) {
        state.isExpenseLimitOff = true;
      } else if (state.expenseAmount < 10000) {
        state.isExpenseLimitOff = false;
      }
    },
  },
});

export const expenseAction = expenseSlice.actions;

export default expenseSlice;
