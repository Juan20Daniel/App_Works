import { AuthRepository } from "@/domain/repositories";

export const continueWithGoogleUseCase = async (repository: AuthRepository) => {
    
    return repository.continueWithGoogle();
}