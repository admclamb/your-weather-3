import { createSlice } from "@reduxjs/toolkit";

import Storage from "../utils/Storage";

export const unitsSlice = createSlice({
  name: "units",
  initialState: {
    units: {},
  },
  reducers: {
    addUnits: (state, action) => {
      Storage.set("units", action.payload);
      state.units = action.payload;
    },
    removeUnits: (state) => {
      Storage.remove("units");
      state.units = {};
    },
  },
});

export const { addUnits, removeUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
