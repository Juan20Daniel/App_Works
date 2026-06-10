import { AuthAPIResponse } from "@/data/models";
import { axiosInstance } from "@/data/network/axios";
import { RegisterUser } from "@/domain/types";

export class AuthService {
    async registerWithEmail(data:RegisterUser):Promise<AuthAPIResponse> {
        try {
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/register', data);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async signInWithEmail(email:string, password:string):Promise<AuthAPIResponse> {
        try {
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/login-with-email', {
                email,
                password
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}