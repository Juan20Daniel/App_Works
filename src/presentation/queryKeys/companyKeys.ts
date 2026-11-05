import { GetCompaniesQueryParams } from "@/domain/useCase";

export type CompanyFilters = Omit<GetCompaniesQueryParams, 'page'>;

export const companyKeys = {
    all: [ "companies" ] as const,
    list: (filters:CompanyFilters) => [...companyKeys.all, 'list', filters] as const
}