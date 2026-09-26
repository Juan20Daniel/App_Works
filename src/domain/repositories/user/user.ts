import { UserEntity } from "@/domain/entities";

export interface UserRepository {
    get(): Promise<UserEntity>;
}