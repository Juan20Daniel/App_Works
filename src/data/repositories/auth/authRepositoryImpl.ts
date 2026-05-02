import { axiosInstance } from "@/data/network";
import { AuthEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AuthAPIResponse } from "@/data/models";
import { AuthMapper} from "@/data/mappers";
import { RegisterUser } from "@/domain/types";

export class AuthRepositoryImpl implements AuthRepository {
    async register(data:RegisterUser): Promise<AuthEntity> {
        try {
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/register',data);
            
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