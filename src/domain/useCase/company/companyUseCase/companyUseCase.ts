import { CompanyRepository } from "@/domain/repositories";

export interface CreateCompanyInput {
    logo?: string;
    name: string;
    desc: string;
}

export interface GetCompaniesQueryParams {
    createdBy?: string;
    page?: number;
    limit?: number;
    active?: boolean;
}

export const getCompaniesUseCase = async (
    repository: CompanyRepository, 
    query:GetCompaniesQueryParams
) => {

}

export const createCompanyUseCase = async (
    repository: CompanyRepository, 
    data:CreateCompanyInput
) => {
    console.log(data);
}