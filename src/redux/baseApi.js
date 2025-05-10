import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import { successToast, errorToast } from '../utils/toast';
import { baseURL } from '../config'


function isHydrateAction(action) {
  return action.type === REHYDRATE;
}

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL || '',
  prepareHeaders: (headers) => {
    // here we can manage auth token: It act like a interceptor of request
    return headers;
  },
  headers: { 'Content-Type': 'application/json' },
});

const baseQueryWithInterceptor = async (args, api, extraOptions = {}) => {
  const result = await baseQuery(args, api, extraOptions);

  if (extraOptions.showSuccessMessage && !result?.error) {
    successToast(result.data?.message);
  }

  if (extraOptions.showErrorMessage && result?.error) {
    errorToast(result.error.data?.message);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  extractRehydrationInfo(action) {
    if (isHydrateAction(action)) {
      if (action.key === 'key used with redux-persist') {
        return action.payload;
      }
      return action?.payload?.api;
    }
  },
});
