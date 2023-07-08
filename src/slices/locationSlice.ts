import { createSlice } from "@reduxjs/toolkit";
import Storage from "../utils/Storage";
import { Location } from "../ts/types/Location";

interface LocationState {
  location: Location;
}

const initialState: LocationState = {
  location: Storage.local.get<Location>("location") ?? {},
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      Storage.local.set("location", action.payload);
      state.location = action.payload;
    },
    removeLocation: (state) => {
      Storage.local.remove("location");
      state.location = {};
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
