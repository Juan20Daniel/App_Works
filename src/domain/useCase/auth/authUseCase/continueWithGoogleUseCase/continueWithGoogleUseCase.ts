import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";

export const continueWithGoogleUseCase = async (
    repository: AuthRepository
):Promise<{user: UserEntity; auth: AuthEntity;}> => {
    
    return repository.continueWithGoogle();
}