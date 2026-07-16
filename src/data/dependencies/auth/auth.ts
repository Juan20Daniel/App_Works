import { 
    AuthLocalService, 
    AuthService, 
    FacebookAuthService, 
    GoogleAuthService 
} from "@/data/datasource";
import { AuthRepositoryImpl } from "@/data/repositories";
import { SecureStorageAdapter } from "@/data/storage";

export const authRepositoryImpl = new AuthRepositoryImpl(
    new AuthService(),
    new AuthLocalService(
        new SecureStorageAdapter()
    ),
    new GoogleAuthService(),
    new FacebookAuthService(),
);