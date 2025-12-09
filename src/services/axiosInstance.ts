import axios from "axios";
import { getAuthToken, isTokenValid, removeAuthToken } from "./tokenService";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:7291/api",
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
      removeAuthToken();
      window.location.href =
        process.env.NEXT_PUBLIC_SIGNIN_REDIRECT_URL ||
        "http://localhost:3001/signin?redirect=http://localhost:3000/callback";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
