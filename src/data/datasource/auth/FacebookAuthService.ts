import {
    LoginManager,
    AccessToken,
    AuthenticationToken,
} from 'react-native-fbsdk-next';
import { axiosInstance } from '@/data/network/axios';
import { AuthAPIResponse } from '@/data/models';
import { AppError } from '@/shared';
import { Platform } from 'react-native';

export class FacebookAuthService {
    async continueWithFacebook(): Promise<AuthAPIResponse> {
        const data = await this.authenticate();
      
        const payload = Platform.OS === 'ios'
            ?   {
                    token: (data as AuthenticationToken).authenticationToken,
                    tokenType: 'authentication_token' as const,
                }
            :   {
                    token: (data as AccessToken).accessToken,
                    tokenType: 'access_token' as const,
                }
        
        const response = await axiosInstance.post<AuthAPIResponse>(
            '/auth/continue-with-facebook',
            payload
        );

        return response.data;
    }

    private async authenticate() {

        const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email'
        ]);
    
        if (result.isCancelled) {
            throw new AppError(
                'FACEBOOK_CANCELLED',
                'El usuario canceló el inicio de sesión.', 
            );

        }
        const data = Platform.OS === 'ios'
            ? await AuthenticationToken.getAuthenticationTokenIOS()
            : await AccessToken.getCurrentAccessToken()
        
        if (!data) {
            throw new AppError(
                'FACEBOOK_NO_TOKEN',
                'Facebook no devolvió un token válido.',
            );
        }
       
        return data;
    }
}