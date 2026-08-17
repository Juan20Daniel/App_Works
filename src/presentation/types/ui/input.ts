export type InputName = 
    | 'email'
    | 'password'
    | 'image'
    | 'typeWork'
    | 'minimumWage'
    | 'maximumWage'
    | 'schedule'
    | 'image'
    | 'companyName'
    | 'companyLogo'
    | 'companyDesc'
    | 'description'
    | 'requirements'
    | 'benefits'
    | 'coords'
    | 'firstname'
    | 'lastname'
    | 'phone'

export interface InputSelect {
    id: number;
    value:string;
}

export type InputValueMap = {
    companyName: string;
    companyLogo: string;
    companyDesc: string;
    selectCompany: InputSelect | null;
}

export type InputNames = keyof InputValueMap;