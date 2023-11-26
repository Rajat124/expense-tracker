import { createSlice } from "@reduxjs/toolkit";

const initialFeatureState = { darkmode: false, Onfeatures: false };

const featureSlice = createSlice({
  name: "feature",
  initialState: initialFeatureState,
  reducers: {
    toggleDarkMode(state) {
      state.darkmode = !state.darkmode;
    },

    activatefeature(state) {
      state.Onfeatures = !state.Onfeatures;
    },
  },
});

export const featureAction = featureSlice.actions;

export default featureSlice;
