import { createSlice } from "@reduxjs/toolkit";
import { CUSTOM_ICONS_COUNTRIES as country } from "../../const/icons";

export const headlinesSlice = createSlice({
  name: "headlines",
  initialState: {
    country: {
      code: "us",
      name: "united states",
      flag: country.usa32p,
    },
    category: "",
  },
  reducers: {
    handleNewsByCountry: ({ country }, { payload }) => {
      country.code = payload.code;
      country.name = payload.name;
      country.flag = payload.flag;
    },
    handleNewsByCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const { handleNewsByCountry, handleNewsByCategory } = headlinesSlice.actions;
export default headlinesSlice.reducer;