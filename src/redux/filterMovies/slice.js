import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterMovie: {},
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filterCars = action.payload;
    },
  },
});
export const filterSlice = slice.reducer;
export const { setFilter } = slice.actions;
