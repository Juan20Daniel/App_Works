import { axiosInstance } from "@/data/network";
import { 
    CompaniesPaginationApiResponse, 
    CreateCompanyApiResponse, 
    CreateCompanyRequest, 
    GetCompaniesQueryRequest 
} from "@/data/apiModels";

export class CompanyService {
    async get(query:GetCompaniesQueryRequest):Promise<CompaniesPaginationApiResponse> {
        try {
            const response = await axiosInstance.get<CompaniesPaginationApiResponse>('/', {
                params: query
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
    async create(data:CreateCompanyRequest):Promise<CreateCompanyApiResponse> {
        try {
            const formData = new FormData();
            
            formData.append('name', data.name);
            formData.append('desc', data.desc);
            
            if(data.logo) formData.append('image', data.logo);
            
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