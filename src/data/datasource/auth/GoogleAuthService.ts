import { googleAuthConfig } from "@/config";
import { AuthAPIResponse } from "@/data/models";
import { axiosInstance } from "@/data/network/axios"
import { AppError } from "@/shared";
import { authorize } from 'react-native-app-auth';

export class GoogleAuthService {
    async continueWithGoogle():Promise<AuthAPIResponse> {
        try {
            const authState = await authorize(googleAuthConfig);

            const { idToken } = authState;

            if (!idToken) {
                throw new AppError(
                    'GOOGLE_NO_ID_TOKEN',
                    'Google no devolvió un ID Token.'
                );
            }
            
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/continue-with-google',{
                accessToken:idToken
            });
            
            return response.data;    
        } catch (error) {
            throw new AppError(
                'GOOGLE_UNKNOWN_ERR',
                'No se logró realizar la operación.',
                error
            );
        }
    }
}