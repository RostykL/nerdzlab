import axios from "axios";
import { setAuth } from "../features/auth/auth";

const setupInterceptors = store => {
  axios.interceptors.request.use(
    function (config) {
      const token = JSON.parse(localStorage.getItem("token")) ?? null;

      config.headers.Authorization = `Bearer ${token}`;
      config.baseURL = "https://interview.nerdzlab.dev/api/";

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        store.dispatch(setAuth(false));
      }
      return Promise.reject(error);
    }
  );
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
  setupInterceptors,
};
