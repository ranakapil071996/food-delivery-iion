import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { createLogger } from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlice } from './slices/cartSlice';
import { userSlice } from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer
} from 'redux-persist';

const loggerMiddleware = createLogger();

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartSlice.reducer,
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware().concat(baseApi.middleware);
    if (import.meta.env.DEV) {
      middlewares.push(loggerMiddleware);
    }

    return middlewares;
  },
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
