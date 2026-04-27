import { UserEntity } from "../userEntity";

export interface AuthEntity {
    token: string;
    user: UserEntity;
}