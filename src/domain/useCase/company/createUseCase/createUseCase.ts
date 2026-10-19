import { CompanyEntity } from "@/domain/entities";
import { CompanyRepository } from "@/domain/repositories";
import { AppError, regex } from "@/shared";

interface CreateCompanyInput {
    companyLogo: null | {
        uri:string;
        name:string;
        type:string;
    };
    companyName: string;
    companyDesc: string;
}

const expretions = regex<CreateCompanyInput>();

export const createUseCase = async (
    repository: CompanyRepository,
    data: CreateCompanyInput
):Promise<CompanyEntity> => {
    const isNameValid = expretions.companyName.test(data.companyName);
    const isDescValid = expretions.companyDesc.test(data.companyDesc);

    if(!isNameValid || !isDescValid) {
        const fieldWithError:Array<string> = [];

        if(isNameValid) fieldWithError.push('companyName');
        if(isDescValid) fieldWithError.push('companyDesc');

        throw new AppError(
            'VALIDATION',
            `Error en los campos: ${fieldWithError.join(', ')}.`,
        );
    }

    return await repository.create({
        logo:data.companyLogo,
        desc:data.companyDesc,
        name:data.companyName,
    });
}