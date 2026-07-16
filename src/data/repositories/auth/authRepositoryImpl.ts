import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AuthMapper} from "@/data/mappers";
import { RegisterUser } from "@/domain/types";
import { AuthLocalService, AuthService, FacebookAuthService, GoogleAuthService } from "@/data/datasource";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private authService:AuthService,
        private authLocalService:AuthLocalService,
        private googleAuthService:GoogleAuthService,
        private facebookAuthService:FacebookAuthService
    ) {}

    async registerWithEmail(data:RegisterUser): Promise<{user:UserEntity, auth:AuthEntity}> {
        try {
            const response = await this.authService.registerWithEmail(data);
            const result = AuthMapper.fromAuthApiToAuthEntity(response);
            
            await this.authLocalService.saveAuth(result.auth);

            return result;
        } catch (error) {
            throw error;
        }
    }

    async signInWithEmail(email: string, password: string): Promise<{user:UserEntity, auth:AuthEntity}> {
        try {
            const response = await this.authService.signInWithEmail(email, password);

            const result = AuthMapper.fromAuthApiToAuthEntity(response);

            await this.authLocalService.saveAuth(result.auth);
            
            return result;
        } catch (error) {
            throw error;
        }
    }

    async continueWithGoogle(): Promise<{user:UserEntity, auth:AuthEntity}> {
        try {
            const response = await this.googleAuthService.continueWithGoogle();

            const result = AuthMapper.fromAuthApiToAuthEntity(response);

            await this.authLocalService.saveAuth(result.auth);

            return result;
        } catch (error) {
            throw error;
        }
    }

     async continueWithFacebook(): Promise<null> {
        try {
            await this.facebookAuthService.continueWithFacebook();
           
            // const result = AuthMapper.fromAuthApiToAuthEntity(response);

            // await this.authLocalService.saveAuth(result.auth);

            return null;
        } catch (error) {
            throw error;
        }
    }

    async refreshSession(): Promise<{user:UserEntity, auth:AuthEntity} | null> {
        try {
            const auth = await this.authLocalService.getAuth();
            if(!auth) {
                return null;
            }
            
            const response = await this.authService.refreshSession(`Bearer ${auth?.refreshToken}`);
            
            const result = AuthMapper.fromAuthApiToAuthEntity(response);

            await this.authLocalService.removeAuth();

            await this.authLocalService.saveAuth(result.auth);

            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAuth(): Promise<AuthEntity | null> {
        try {
            return await this.authLocalService.getAuth();
        } catch (error) {
            throw error;
        }
    }

    async signOut(): Promise<void> {
        await this.authLocalService.removeAuth();
    }
}