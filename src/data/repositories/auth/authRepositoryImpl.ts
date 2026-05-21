import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AuthMapper} from "@/data/mappers";
import { RegisterUser } from "@/domain/types";
import { AuthLocalService, AuthService } from "@/data/datasource";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private authService:AuthService,
        private authLocalService:AuthLocalService
    ) {}

    async registerWithEmail(data:RegisterUser): Promise<{user:UserEntity, auth:AuthEntity}> {
        try {
            const response = await this.authService.signInWithEmail(data);
            
            const result = AuthMapper.fromAuthApiToAuthEntity(response);
            console.log(result);
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