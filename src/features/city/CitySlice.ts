import { createSlice } from "@reduxjs/toolkit";
type SliceState = {
  name?: string;
};

export const citySlice = createSlice({
  name: "city",
  initialState: {
    name: "London",
  } as SliceState,
  reducers: {
    set: (state, action) => {
      state.name = action.payload;
    },
    remove: (state) => {
      state.name = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { set, remove } = citySlice.actions;

export default citySlice.reducer;
