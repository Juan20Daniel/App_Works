import { CompaniesPaginationApiResponse, CreateCompanyApiResponse } from "@/data/apiModels";
import { axiosInstance } from "@/data/network";
import { CreateCompanyParams, GetCompaniesQueryParams } from "@/domain/types";

export class CompanyService {
    async get(query:GetCompaniesQueryParams):Promise<CompaniesPaginationApiResponse> {
        try {
            const response = await axiosInstance.get<CompaniesPaginationApiResponse>('/', {
                params: query
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async create(data:CreateCompanyParams):Promise<CreateCompanyApiResponse> {
        try {
            const formData = new FormData();
            
            const response = await axiosInstance.post<CreateCompanyApiResponse>('/company', formData, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}