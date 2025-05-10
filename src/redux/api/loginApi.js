
import { LOGIN } from '../../config/endURL';
import { baseApi } from '../baseApi'
export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: LOGIN,
        body,
        method: 'POST',
      }),
    })
  }),
});

export const {
  useLoginMutation
} = loginApi;
