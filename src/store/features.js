import { createSlice } from "@reduxjs/toolkit";

const initialFeatureState = { darkmode: false };

const featureSlice = createSlice({
  name: "feature",
  initialState: initialFeatureState,
  reducers: {
    toggleDarkMode(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const featureAction = featureSlice.actions;

export default featureSlice;
