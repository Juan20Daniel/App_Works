import { AuthEntity, UserEntity } from "@/domain/entities";
import { AuthRepository } from "@/domain/repositories";
import { AppError, regex } from "@/shared";

interface RegisterDataInput {
    firstname: string;
    lastname:  string;
    email:     string;
    password:  string;
}

const expretions = regex<RegisterDataInput>();

const validateData = (data:RegisterDataInput) => {
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
    data: RegisterDataInput
):Promise<{
    user: UserEntity;
    auth: AuthEntity;
}> => {
    const validationResult = validateData(data);
    if(validationResult.length > 0) {
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campios', true);
    }
    return repository.registerWithEmail(data);
}
