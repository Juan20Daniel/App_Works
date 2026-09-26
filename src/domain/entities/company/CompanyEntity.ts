export interface CompanyEntity {
    id: string;
    logo: string|null;
    name: string;
    desc: string;
    createBy: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}