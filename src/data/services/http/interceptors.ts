import { axiosInstance } from "./axios";

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);