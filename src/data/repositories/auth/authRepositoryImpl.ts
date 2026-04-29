import { axiosInstance } from "@/data/services/http/axios";
import { AuthEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AuthMapper, AuthAPIResponse } from "@/data/models/auth";
import { RegisterUser } from "@/domain/types";

export class AuthRepositoryImpl implements AuthRepository {
    async register(data:RegisterUser): Promise<AuthEntity> {
        try {
            console.log(data);
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/register',data);
            console.log(response.data);
            return AuthMapper.fromAuthApiToAuthEntity(response.data);
        } catch (error) {
            throw error;
        }
    }
    async login(email: string, password: string): Promise<AuthEntity> {
        try {
            return {
                token:'',
                user: {
                    id:'',
                    fisrtname:'',
                    lastname:'',
                    phone:'',
                    email:'',
                    role:''
                }
            }
        } catch (error) {
            throw error;
        }
    }
}