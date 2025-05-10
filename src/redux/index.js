import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { createLogger } from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlice } from './slices/cartSlice';

const loggerMiddleware = createLogger();


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(baseApi.middleware);
    if (import.meta.env.DEV) {
      middlewares.push(loggerMiddleware);
    }

    return middlewares;
  },
});

setupListeners(store.dispatch);
