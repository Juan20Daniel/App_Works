import { AuthAPIResponse } from "@/data/models";
import { axiosInstance } from "@/data/network/axios";
import { RegisterUser } from "@/domain/types";

export class AuthService {
    async signInWithEmail(data:RegisterUser):Promise<AuthAPIResponse> {
        try {
            const response = await axiosInstance.post<AuthAPIResponse>('/auth/register', data);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}