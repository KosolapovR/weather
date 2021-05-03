import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../features/city/CitySlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
