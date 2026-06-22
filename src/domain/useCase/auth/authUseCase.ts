import { AuthRepository } from "@/domain/repositories";
import { RegisterUser } from "../../types";
import { expretions, AppError } from "@/shared";

const validateData = (data:RegisterUser) => {
    const result = (Object.keys(data) as (keyof typeof data)[]).map(field => {
        if(!expretions[field].test(data[field])) {
            return {
                field:field,
                value:data[field],
                message:'Campo no válido'
            }
        }
        return null;
    });
    return result.filter(v => v !== null);
}

export const registerUserUseCase = async (
    repository: AuthRepository, 
    data: RegisterUser
) => {
    const validationResult = validateData(data);
    if(validationResult.length > 0) {
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campios', true);
    }
    return repository.registerWithEmail(data);
}

export const signInWithEmailUseCase = async (
    repository: AuthRepository, 
    email: string, 
    password: string
) => {
    
    if(!expretions.email.test(email) || !expretions.password.test(password)) {
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campios', true);
    }

    return repository.signInWithEmail(email, password);
}

export const signInWithGoogleUseCase = async (repository: AuthRepository) => {
    return repository.signInWithGoogle();
}