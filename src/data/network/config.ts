import { 
    MODE, 
    API_WORKS_URL_IOS, 
    API_WORKS_URL_ANDROID,
    API_WORKS_URL_PRODUCTION
} from '@env';
import { Platform } from 'react-native';

const baseURL = () => {
    if(MODE === 'production') return API_WORKS_URL_PRODUCTION;
    if(Platform.OS === 'ios') return API_WORKS_URL_IOS;
    return API_WORKS_URL_ANDROID;
}

export const API_CONFIG = {
    baseURL: baseURL(),
    timeout: 10000,
    headers: {
        "Content-Type":"application/json"
    }
}