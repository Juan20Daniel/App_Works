import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthAPIResponse } from "../../models";

export class AuthMapper {
    static fromAuthApiToAuthEntity(authApi:AuthAPIResponse):{user:UserEntity, auth:AuthEntity} {
        return {
            auth:{token:authApi.token},
            user: {
                id:authApi.user._id,
                fisrtname:authApi.user.firstname,
                lastname:authApi.user.lastname,
                phone:authApi.user.phone,
                email:authApi.user.email,
                role: authApi.user.role
            }
        }
    }
}