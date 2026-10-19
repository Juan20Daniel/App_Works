import { CompanyEntity } from "@/domain/entities";
import { PaginationResult } from "@/domain/pagination";
import { CompanyRepository } from "@/domain/repositories";

export interface GetCompaniesQueryParams {
    createdBy?: string;
    page?: number;
    limit?: number;
    active?: boolean;
}

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 20;

export const getCompaniesUseCase = async (
    repository: CompanyRepository,
    query: GetCompaniesQueryParams
):Promise<PaginationResult<CompanyEntity>> => {
    const page = Math.max(1, query.page??1);
    const limit = Math.min(MAX_LIMIT, Math.max(1, query.limit??DEFAULT_LIMIT));
    const active = query.active??true;
    const createdBy = query.createdBy?.trim() || undefined;
    
    return repository.get({...query, limit, page, active, createdBy});
}