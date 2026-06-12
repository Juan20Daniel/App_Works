import { axiosInstance } from "./axios";

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);