import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../utils';

const initialState = {
  isAuth: Boolean(getToken()),
  atoken: getToken() || '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
      state.atoken = action.payload;
    },
    removeAuth: (state) => {
      state.isAuth = false;
      state.atoken = '';
    },
  },
});

export const { setAuth, removeAuth } = userSlice.actions;
export default userSlice.reducer;
