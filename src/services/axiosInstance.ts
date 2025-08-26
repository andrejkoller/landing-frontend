import axios from "axios";
import { getAuthToken, isTokenValid, removeAuthToken } from "./tokenService";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7291/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token && isTokenValid()) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (token && !isTokenValid()) {
      removeAuthToken();
      window.location.href = "/signin";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to signin...");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
