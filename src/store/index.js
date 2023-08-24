import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import expenseSlice from "./expense";
import featureSlice from "./features";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    expense: expenseSlice.reducer,
    feature: featureSlice.reducer,
  },
});

export default store;
