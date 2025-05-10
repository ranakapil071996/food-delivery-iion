import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: {},
};

export const cartSlice = createSlice({
  initialState,
  name: "page",
  reducers: {
    toggleCategory: (state, action) => {
      state.selectedCategories[action.payload] =
        !state.selectedCategories[action.payload];
    },
  },
});

export const { toggleCategory } = cartSlice.actions;
export default cartSlice.reducer;
