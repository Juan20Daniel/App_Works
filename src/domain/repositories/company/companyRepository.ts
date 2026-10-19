import { CompanyEntity } from "@/domain/entities";
import { PaginationResult } from "@/domain/pagination";

interface CreateCompanyData {
    logo: null | {
        uri: string;
        name: string;
        type: string;
    };
    name: string;
    desc: string;
}

interface GetCompaniesQueryParams {
    createdBy?: string;
    page?: number;
    limit?: number;
    active?: boolean;
}

export interface CompanyRepository {
    get(query:GetCompaniesQueryParams): Promise<PaginationResult<CompanyEntity>>;
    create(data:CreateCompanyData): Promise<CompanyEntity>;
}