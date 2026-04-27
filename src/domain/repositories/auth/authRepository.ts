import { AuthEntity } from "@/domain/entities";

export interface AuthRepository {
    register(
        fistname:string, 
        lastname:string, 
        phone:string,email:string, 
        password:string
    ): Promise<AuthEntity>;
    login(email:string, password:string): Promise<AuthEntity>;
}