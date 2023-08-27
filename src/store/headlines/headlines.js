import { createSlice } from "@reduxjs/toolkit";

export const headlinesSlice = createSlice({
  name: "headlines",
  initialState: {
    country: {
      code: "us",
      name: "united states"
    },
    category: "technology",
  },
  reducers: {
    handleNewsByCountry: ({ country }, { payload }) => {
      country.code = payload.code;
      country.name = payload.name;
    },
    handleNewsByCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const { handleNewsByCountry, handleNewsByCategory } = headlinesSlice.actions;
export default headlinesSlice.reducer;