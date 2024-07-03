import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    config.params = {
      ...config.params,
      api_key: process.env.REACT_APP_API_KEY,
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
