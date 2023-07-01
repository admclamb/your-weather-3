import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "../slices/locationSlice";
import unitsReducer from "../slices/unitsSlice";
import weatherReducer from "../slices/weatherSlice";

const store = configureStore({
  reducer: {
    location: locationReducer,
    units: unitsReducer,
    weather: weatherReducer,
  },
});

export default store;
