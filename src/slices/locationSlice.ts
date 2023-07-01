import { createSlice } from "@reduxjs/toolkit";

import Storage from "../utils/Storage";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: {},
  },
  reducers: {
    addLocation: (state, action) => {
      Storage.set("location", action.payload);
      state.location = action.payload;
    },
    removeLocation: (state) => {
      Storage.remove("location");
      state.location = {};
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
