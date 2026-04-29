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
    });

    return result;
}

export const registerUser = async (repository:AuthRepository, data:RegisterUser) => {
    const validationResult = validateData(data);
    if(validationResult.length > 0) {
        console.log(validationResult)
        throw new AppError('VALIDATION', 'Error de validación en alguno de los campios', true);
    }

    return repository.register(data);
}