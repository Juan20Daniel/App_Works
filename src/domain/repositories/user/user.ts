import { UserEntity } from "@/domain/entities";

export interface UserRepository {
    getUser(): Promise<UserEntity>;
}