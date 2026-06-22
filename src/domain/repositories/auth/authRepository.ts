import { AuthEntity, UserEntity } from "@/domain/entities";
import { RegisterUser } from "@/domain/types";

export interface AuthRepository {
    registerWithEmail(data:RegisterUser): Promise<{user:UserEntity, auth:AuthEntity}>;
    // registerWithGoogle(data:RegisterUser): Promise<AuthEntity>;

    signInWithEmail(email:string, password:string): Promise<{user:UserEntity, auth:AuthEntity}>;
    signInWithGoogle(): Promise<void>;
    getAuth(): Promise<AuthEntity | null>;
    signOut(): Promise<void>;
}