import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";

export const refreshSessionUseCase = async (
    repository: AuthRepository
):Promise<{user: UserEntity;auth: AuthEntity;}|null> => {
    
    return repository.refreshSession();
}