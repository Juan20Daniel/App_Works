import { 
  GOOGLE_CLIENT_ID_ANDROID, 
  GOOGLE_CLIENT_ID_IOS,
  GOOGLE_REDIRECT_URL_IOS,
  GOOGLE_REDIRECT_URL_ANDROID
} from "@env";
import { Platform } from "react-native";

export const googleAuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId: Platform.OS === 'ios'
    ? GOOGLE_CLIENT_ID_IOS
    : GOOGLE_CLIENT_ID_ANDROID
  ,
  redirectUrl: Platform.OS === 'ios'
    ? GOOGLE_REDIRECT_URL_IOS
    : GOOGLE_REDIRECT_URL_ANDROID,
  scopes: [
    'openid',
    'profile',
    'email'
  ]
};