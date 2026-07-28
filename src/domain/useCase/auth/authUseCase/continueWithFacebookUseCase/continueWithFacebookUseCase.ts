import { AuthRepository } from "@/domain/repositories";

export const continueWithFacebookUseCase = async (repository: AuthRepository) => {
   
    return repository.continueWithFacebook();
}
