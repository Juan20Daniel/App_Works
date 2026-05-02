import { UserEntity } from "../user";

export interface AuthEntity {
    token: string;
    user: UserEntity;
}