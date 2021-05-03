import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { weatherAPI } from "../../api";

type CityEntities = {
  [key: string]: object;
};
type SliceState = {
  entities: CityEntities;
};

export const fetchWeatherByCity: any = createAsyncThunk(
  "cityWeather/fetchByIdStatus",
  async (city: string) => {
    return await weatherAPI.getWeatherByCity(city);
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState: {
    entities: {},
  } as SliceState,
  reducers: {
    remove: () => {},
  },
  extraReducers: {
    [fetchWeatherByCity.fulfilled]: (state, action) => {
      const { payload } = action;
      state.entities[payload?.id?.toString()] = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { remove } = citySlice.actions;

export default citySlice.reducer;
