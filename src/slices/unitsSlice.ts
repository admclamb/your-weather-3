import { createSlice } from "@reduxjs/toolkit";

import Storage from "../utils/Storage";

interface UnitsState {
  units: string;
}

const initialState: UnitsState = {
  units: Storage.get("units") ?? "imperial",
};

export const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    addUnits: (state, action) => {
      Storage.set("units", action.payload);
      state.units = action.payload;
    },
    removeUnits: (state) => {
      Storage.remove("units");
      state.units = "";
    },
  },
});

export const { addUnits, removeUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
