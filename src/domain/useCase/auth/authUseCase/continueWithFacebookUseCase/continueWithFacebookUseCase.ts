import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";

export const continueWithFacebookUseCase = async (
    repository: AuthRepository
):Promise<{ user: UserEntity;auth: AuthEntity;}> => {
   
    return repository.continueWithFacebook();
}
