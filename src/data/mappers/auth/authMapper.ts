import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthAPIResponse } from "../../models";

export class AuthMapper {
    static fromAuthApiToAuthEntity(authApi:AuthAPIResponse):{user:UserEntity, auth:AuthEntity} {
        return {
            auth:{
                token:authApi.auth.token,
                refreshToken:authApi.auth.refreshToken
            },
            user: {
                id:authApi.user._id,
                profile_image:authApi.user.profile_image,
                firstname:authApi.user.firstname,
                lastname:authApi.user.lastname,
                email:authApi.user.email,
                role: authApi.user.role,
                isActive: authApi.user.isActive,
                provider: authApi.user.provider,
                provider_id: authApi.user.provider_id,
                avatarColor: authApi.user.avatarColor
            }
        }
    }
}