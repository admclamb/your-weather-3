import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
  },
  reducers: {
    addWeather: (state, action) => {
      state.weather = action.payload;
    },
    removeWeather: (state) => {
      state.weather = {};
    },
  },
});

export const { addWeather, removeWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
