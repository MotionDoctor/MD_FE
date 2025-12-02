// api.js 또는 axios instance 파일
import axios from "axios";
import { refreshAccessToken } from "./Refresh";

const api = axios.create({ baseURL: "http://133.186.132.40:8000" });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 실패한 요청 다시 시도
      }
    }

    return Promise.reject(error);
  }
);

export default api;
