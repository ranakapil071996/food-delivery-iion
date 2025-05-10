import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload;
    },
    removeAuth: (state) => {
      state.token = "";
    },
  },
});

export const { setAuth, removeAuth } = userSlice.actions;
export default userSlice.reducer;
