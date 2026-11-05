import { Platform } from "react-native";
import { API_WORKS_URL_ANDROID, API_WORKS_URL_IOS, API_WORKS_URL_PRODUCTION, MODE } from "@env";
import { authRepositoryImpl } from "../dependencies";
import { axiosInstance } from "./axios";
import axios, { InternalAxiosRequestConfig } from "axios";

let refreshPromise: Promise<string> | null = null;

const refreshAccessToken = async (): Promise<string> => {
    const auth = await authRepositoryImpl.getAuth();
    if (!auth?.refreshToken) throw new Error("No hay refresh token");

    const BASE_URL = MODE === 'production'
        ?   API_WORKS_URL_PRODUCTION
        :   Platform.OS === 'ios' 
                ?   API_WORKS_URL_IOS
                :   API_WORKS_URL_ANDROID

    const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken: `Bearer ${auth.refreshToken}`,
    });
   
    await authRepositoryImpl.saveAuth({
        token: data.auth.token,
        refreshToken: data.auth.refreshToken,
    });

    return data.auth.token;
};

axiosInstance.interceptors.request.use(
    async (config) => {
        const auth = await authRepositoryImpl.getAuth();
        console.log('solicitud desde: interceptors.request')
        // console.log(config)
        if(auth) {
            config.headers.Authorization = `Bearer ${auth.token}`;
        }
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(!axios.isAxiosError(error) || !error.response || !error.config) {
            return Promise.reject(error);
        }
        
        const originalRequest = error.config as InternalAxiosRequestConfig & {_retry:boolean};
        const isUnautenticate = error.response.status === 401;

        if(!isUnautenticate || originalRequest._retry) {
            return Promise.reject(error);
        }
        //verificar que la propiedad code existe en console.log(error.response.code);
        //para colocarlo en error.response.status === 401 || error.response.code
        //Nota: la peticion se ejecuta varias veces por tanstack
        originalRequest._retry = true;

        try {
            if(!refreshPromise) {
                refreshPromise = refreshAccessToken().finally(() => {
                    refreshPromise = null;
                });
            }
            const newToken = await refreshPromise;

            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            return axiosInstance(originalRequest);
        } catch (refreshError) {
            await authRepositoryImpl.signOut();

            return Promise.reject(refreshError);
        }
    }
);