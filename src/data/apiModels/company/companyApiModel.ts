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
    logo:      null | string;
    name:      string;
    desc:      string;
    createBy:  string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
}