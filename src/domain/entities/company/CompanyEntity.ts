export interface CompanyEntity {
    id:        string;
    logo:      Logo;
    name:      string;
    desc:      string;
    createdBy: string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Logo {
    url?:     string;
    fallback: Fallback;
}

export interface Fallback {
    colorIndex: number;
    initials:   string;
}