import { createSlice } from "@reduxjs/toolkit";

import Storage from "../utils/Storage";

interface UnitsState {
  units: string;
}

const initialState: UnitsState = {
  units: Storage.local.get<string>("units") ?? "imperial",
};

export const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    addUnits: (state, action) => {
      Storage.local.set("units", action.payload);
      state.units = action.payload;
    },
    removeUnits: (state) => {
      Storage.local.remove("units");
      state.units = "";
    },
  },
});

export const { addUnits, removeUnits } = unitsSlice.actions;

export default unitsSlice.reducer;
