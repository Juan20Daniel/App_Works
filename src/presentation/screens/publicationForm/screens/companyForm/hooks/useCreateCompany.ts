import { createCompanyUseCase } from "@/domain/useCase";
import { CompanyFormValue } from "../types";
import { companyRepositoryImpl } from "@/data/dependencies/company/company";

export const useCreateCompany = () => {
    const createCompany = async (data:CompanyFormValue) => {
        try {
            console.log(data);
            //await createCompanyUseCase(companyRepositoryImpl, data)
        } catch (error) {
            console.log(error);
        }
    }
    return {
        createCompany
    }
}
