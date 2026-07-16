import { AuthEntity, UserEntity } from "@/domain/entities";
import { RegisterUser } from "@/domain/types";

export interface AuthRepository {
    registerWithEmail(data:RegisterUser): Promise<{user:UserEntity, auth:AuthEntity}>;  
    signInWithEmail(email:string, password:string): Promise<{user:UserEntity, auth:AuthEntity}>;
    continueWithGoogle(): Promise<{user:UserEntity, auth:AuthEntity}>;
    continueWithFacebook(): Promise<null>;
    getAuth(): Promise<AuthEntity | null>;
    signOut(): Promise<void>;
    refreshSession(): Promise<{user:UserEntity, auth:AuthEntity} | null>;
}