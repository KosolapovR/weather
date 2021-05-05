import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { weatherAPI } from "../../api";
import { RootState } from "../../store";

export type WeatherEntities = {
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
  entities: WeatherEntities[];
  byId: any;
  currentId: number;
};

export const selectAllWeatherEntities = (state: RootState) => {
  return state.weather.byId.map((id: number) => state.weather.entities[id]);
};

export const selectCurrentWeatherEntity = (
  state: RootState
): WeatherEntities => {
  return state.weather.entities[state.weather.currentId];
};

export const fetchWeatherByCity: any = createAsyncThunk(
  "weather/fetchByCityName",
  async (city: string) => {
    return await weatherAPI.getWeatherByCity(city);
  }
);

export const fetchWeatherByCoords: any = createAsyncThunk(
  "weather/fetchByCoords",
  async (coords: { lat: number; lon: number }) => {
    return await weatherAPI.getWeatherByCoords(coords);
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    entities: {},
    byId: [],
  } as SliceState,
  reducers: {
    setCurrentWeatherEntity(state, action) {
      state.currentId = action.payload;
    },
    removeWeatherEntity(state, action) {
      const id = action.payload;

      debugger;
      state.byId = state.byId.filter((item: number) => item !== id);
      delete state.entities[id];
    },
  },
  extraReducers: {
    [fetchWeatherByCity.fulfilled]: (
      state,
      action: { payload: WeatherEntities }
    ) => {
      const { payload } = action;
      payload.dt = Date.now();
      const { id } = payload;

      state.entities[id] = payload;
      state.currentId = id;
      if (!state.byId.includes(id)) state.byId.push(id);
    },
    [fetchWeatherByCoords.fulfilled]: (
      state,
      action: { payload: WeatherEntities }
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

export const {
  setCurrentWeatherEntity,
  removeWeatherEntity,
} = weatherSlice.actions;

export default weatherSlice.reducer;
