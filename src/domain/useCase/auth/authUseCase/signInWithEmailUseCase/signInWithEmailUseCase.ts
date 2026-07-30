import { AuthRepository } from "@/domain/repositories";
import { AppError, expretions } from "@/shared";

export const signInWithEmailUseCase = async (
    repository: AuthRepository, 
    email: string, 
    password: string
) => {
    if(!expretions.email.test(email) || !expretions.password.test(password)) {
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campos', true);
    }

    return repository.signInWithEmail(email, password);
}