import { createSlice } from "@reduxjs/toolkit";

const intialtokenValue = localStorage.getItem("token");

const intialAuthValue = {
  // token: "",
  isUserLoggedIn: false,
  userID: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthValue,
  reducers: {
    login(state, action) {
      localStorage.setItem("token", action.payload);
      state.isUserLoggedIn = true;
      // state.token = action.payload;
    },
    logout(state) {
      state.isUserLoggedIn = false;
      localStorage.removeItem("token");
    },
    refresh(state) {
      state.isUserLoggedIn = !!intialtokenValue;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
