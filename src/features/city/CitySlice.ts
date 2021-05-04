import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { weatherAPI } from "../../api";
import { RootState } from "../../store";

export type CityEntities = {
  cod: number;
  name: string;
  id: number;
  timezone: number;
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    id: number;
    type: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
};
export type SliceState = {
  entities: CityEntities[];
  byId: any;
  currentId: number;
};

export const selectAllCities = (state: RootState) => {
  return state.city.byId.map((id: number) => state.city.entities[id]);
};

export const selectCurrentCityWeather = (state: RootState): CityEntities => {
  return state.city.entities[state.city.currentId];
};

export const fetchWeatherByCity: any = createAsyncThunk(
  "cityWeather/fetchByCityName",
  async (city: string) => {
    return await weatherAPI.getWeatherByCity(city);
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState: {
    entities: {},
    byId: [],
  } as SliceState,
  reducers: {
    remove: () => {},
  },
  extraReducers: {
    [fetchWeatherByCity.fulfilled]: (
      state,
      action: { payload: CityEntities }
    ) => {
      const { payload } = action;
      payload.dt = Date.now();
      const { id } = payload;

      state.entities[id] = payload;
      state.currentId = id;
      if (!state.byId.includes(id)) state.byId.push(id);
    },
  },
});

export const { remove } = citySlice.actions;

export default citySlice.reducer;
