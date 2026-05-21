import { AuthEntity, UserEntity } from "@/domain/entities";
import { RegisterUser } from "@/domain/types";

export interface AuthRepository {
    registerWithEmail(data:RegisterUser): Promise<{user:UserEntity, auth:AuthEntity}>;
    // registerWithGoogle(data:RegisterUser): Promise<AuthEntity>;

    // signInWithEmail(email:string, password:string): Promise<AuthEntity>;
    // signInWithGoogle(email:string, password:string): Promise<AuthEntity>;
    getAuth(): Promise<AuthEntity | null>;
    signOut(): Promise<void>;
}