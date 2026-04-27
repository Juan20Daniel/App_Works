import { axiosInstance } from "@/data/services/http/axios";
import { AuthEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AuthMapper, AuthAPIResponse } from "@/data/models/auth";

export class AuthRepositoryImpl implements AuthRepository {
    async register(fistname: string, lastname: string, phone: string, email: string, password: string): Promise<AuthEntity> {
        try {
            console.log({
                fistname,
                lastname,
                phone,
                email,
                password
            });
            const {data} = await axiosInstance.post<AuthAPIResponse>('/auth/register',{
                fistname,
                lastname,
                phone,
                email,
                password
            });
            console.log(data);
            return AuthMapper.fromAuthApiToAuthEntity(data);
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