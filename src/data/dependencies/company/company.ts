import { CompanyService } from "@/data/datasource";
import { CompanyRepositoryImpl } from "@/data/repositories";

export const companyRepositoryImpl = new CompanyRepositoryImpl(
    new CompanyService
);