export interface CompanyEntity {
    id: string;
    logo: string|null;
    name: string;
    desc: string;
    createdBy: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}