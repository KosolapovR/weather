import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/WeatherSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
