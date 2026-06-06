import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { Token } from './utils';

const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v0/keks';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = Token.get();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    }
  );

  return api;
};
