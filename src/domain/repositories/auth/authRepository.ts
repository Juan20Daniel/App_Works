import { AuthEntity, UserEntity } from "@/domain/entities";

interface RegisterData {
    firstname: string;
    lastname:  string;
    email:     string;
    password:  string;
}

export interface AuthRepository {
    registerWithEmail(data:RegisterData): Promise<{user:UserEntity, auth:AuthEntity}>;  
    signInWithEmail(email:string, password:string): Promise<{user:UserEntity, auth:AuthEntity}>;
    continueWithGoogle(): Promise<{user:UserEntity, auth:AuthEntity}>;
    continueWithFacebook(): Promise<{user:UserEntity, auth:AuthEntity}>;
    getAuth(): Promise<AuthEntity | null>;
    signOut(): Promise<void>;
    saveAuth(auth:AuthEntity): Promise<void>;
    refreshSession(): Promise<{user:UserEntity, auth:AuthEntity} | null>;
}