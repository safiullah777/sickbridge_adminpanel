import axios, { AxiosInstance } from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

export const httpApi: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// httpApi.interceptors.request.use((config) => {
//   config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };
//   console.log({ config });
//   return config;
// });

// httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
//   throw new ApiError<ApiErrorData>(error.response?.data?.message || error?.message, error?.response?.data);
// });

// export interface ApiErrorData {
//   message: string;
// }
