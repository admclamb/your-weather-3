import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../ts/types/Weather";

interface WeatherState {
  weather: Weather;
}

const initialState: WeatherState = {
  weather: {},
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeather: (state, action: PayloadAction<Weather>) => {
      state.weather = action.payload;
    },
    removeWeather: (state) => {
      state.weather = {};
    },
  },
});

export const { addWeather, removeWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
