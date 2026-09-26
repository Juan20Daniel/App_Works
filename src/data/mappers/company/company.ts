import { CompanyApi } from "@/data/apiModels";
import { CompanyEntity } from "@/domain/entities";

export class CompanyMapper {
    static fromCompanyApiToCompanyEntity(companyApi:CompanyApi):CompanyEntity {
        return {
            id: companyApi._id,
            logo: companyApi.logo,
            name: companyApi.name,
            desc: companyApi.desc,
            createBy: companyApi.createBy,
            isActive: companyApi.isActive,
            createdAt: companyApi.createdAt,
            updatedAt: companyApi.updatedAt
        }
    }
}