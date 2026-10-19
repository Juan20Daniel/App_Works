export interface GetCompaniesQueryRequest {
    createdBy?: string;
    page?: number;
    limit?: number;
    active?: boolean;
}

export interface CreateCompanyRequest {
    logo: null | {
        uri: string;
        name: string;
        type: string;
    }
    name: string;
    desc: string;
}