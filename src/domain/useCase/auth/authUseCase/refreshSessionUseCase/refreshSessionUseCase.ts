import { AuthRepository } from "@/domain/repositories";

export const refreshSessionUseCase = async (repository: AuthRepository) => {
    
    return repository.refreshSession();
}