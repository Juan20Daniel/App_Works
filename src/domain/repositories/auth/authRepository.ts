import { AuthEntity } from "@/domain/entities";
import { RegisterUser } from "@/domain/types";

export interface AuthRepository {
    register(data:RegisterUser): Promise<AuthEntity>;
    login(email:string, password:string): Promise<AuthEntity>;
}