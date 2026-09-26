import { CompanyEntity } from "@/domain/entities";

export interface CreateCompanyData {
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

export interface PaginationResult {
    items:     CompanyEntity[];
    nextPage:  number;
    limit:     number;
}

export interface CompanyRepository {
    get(query:GetCompaniesQueryParams): Promise<PaginationResult>;
    create(data:CreateCompanyData): Promise<CompanyEntity>;
}