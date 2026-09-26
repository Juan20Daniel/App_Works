import { CompanyService } from "@/data/datasource";
import { CompanyMapper } from "@/data/mappers";
import { CompanyEntity } from "@/domain/entities";
import { CompanyRepository } from "@/domain/repositories/company";
import { CreateCompanyParams, GetCompaniesQueryParams, Pagination } from "@/domain/types";

export class CompanyRepositoryImpl implements CompanyRepository {
    constructor(
        private companyService:CompanyService
    ) {}

    async get(query:GetCompaniesQueryParams): Promise<Pagination<CompanyEntity>> {
        try {
            const response = await this.companyService.get(query);

            const companies = response.companies.map(company => {
                return CompanyMapper.fromCompanyApiToCompanyEntity(company);
            });
            
            return {
                items: companies,
                nextPage: response.nextPage,
                limit: response.limit 
            }
        } catch (error) {
            throw error;
        }
    }
    async create(data: CreateCompanyParams): Promise<CompanyEntity> {
        try {
            const response = await this.companyService.create(data);

            return CompanyMapper.fromCompanyApiToCompanyEntity(response.company);
        } catch (error) {
            throw error;
        }
    }
}