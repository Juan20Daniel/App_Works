export interface CreateCompanyApiResponse {
    message: string;
    company: CompanyApi;
}

export interface CompaniesPaginationApiResponse {
    message:   string;
    nextPage:  number;
    limit:     number;
    companies: CompanyApi[];
}

export interface CompanyApi {
    _id:       string;
    logo:      string|null;
    name:      string;
    desc:      string;
    createdBy: string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
}