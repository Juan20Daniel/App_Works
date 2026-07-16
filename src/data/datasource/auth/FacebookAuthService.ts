import {
    LoginManager,
    AccessToken
} from 'react-native-fbsdk-next';

// import { axiosInstance } from '@/data/network/axios';
import { AuthAPIResponse } from '@/data/models';
import { AppError } from '@/shared';

export class FacebookAuthService {
    async continueWithFacebook(): Promise<AuthAPIResponse> {
        const accessToken = await this.getAccessToken();
        console.log(accessToken);

        return {
            message: 'Inicio de sesión facebook',
            auth: {
                token: '',
                refreshToken: ''
            },
            user: {
                _id:'',
                firstname:'',
                lastname: '',
                email:'',
                avatarColor:'',
                isActive: true,
                role:''
            }
        };
    }

    private async getAccessToken() {
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

        const accessToken = await AccessToken.getCurrentAccessToken();
        if (!accessToken) {
            throw new AppError(
                'FACEBOOK_NO_ACCESS_TOKEN',
                'Facebook no devolvió un Access Token.',
            );
        }
       
        return accessToken;
    }
}