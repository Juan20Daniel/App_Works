import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AppError, regex } from "@/shared";

export const signInWithEmailUseCase = async (
    repository: AuthRepository, 
    email: string, 
    password: string
):Promise<{
    user: UserEntity;
    auth: AuthEntity;
}> => {
    const expretions = regex<{email:string, password:string}>();
    
    if(!expretions.email!.test(email) || !expretions.password!.test(password)) {
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campos', true);
    }

    return repository.signInWithEmail(email, password);
}