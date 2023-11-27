import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import expenseSlice from "../features/expenseSlice/expenseSlice";
import featureSlice from "../features/expenseSlice/expenseSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expense: expenseSlice.reducer,
    feature: featureSlice.reducer,
  },
});

export default store;
