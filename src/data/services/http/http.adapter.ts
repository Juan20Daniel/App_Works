import { API_WORKS_URL } from "@env";
import { API_CONFIG } from "./config";
import axios, {AxiosInstance} from 'axios';

interface Options {
    baseURL: string,
    timeout: number,
    params: Record<string, string>;
}

export class HttpAdapter {
    private axiosInstance: AxiosInstance;

    constructor(options:Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseURL,
            timeout: options.timeout,
            params: options.params
        });
    }
}