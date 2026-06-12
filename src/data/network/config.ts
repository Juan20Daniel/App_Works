import { API_WORKS_URL_IOS, API_WORKS_URL_ANDROID } from '@env';
import { Platform } from 'react-native';

export const API_CONFIG = {
    baseURL: Platform.OS === 'ios' 
        ? API_WORKS_URL_IOS
        : API_WORKS_URL_ANDROID,
    timeout: 10000,
    headers: {
        "Content-Type":"application/json"
    }
}