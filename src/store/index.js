import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import expenseSlice from "../features/expense/expenseSlice";
import featureSlice from "../features/expense/expenseSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expense: expenseSlice.reducer,
    feature: featureSlice.reducer,
  },
});

export default store;
