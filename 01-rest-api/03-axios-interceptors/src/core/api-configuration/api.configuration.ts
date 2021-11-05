import axios, { AxiosRequestConfig } from 'axios';

const requestInterceptor = (config: AxiosRequestConfig) => ({
  ...config,
  headers: {
    ...config.headers,
    Accept: 'application/json',
  },
});

const requestErrorInterceptor = (error) => Promise.reject(error);

axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    alert('Oh! Algo ha ido mal...');
    return Promise.reject(error);
  }
);
