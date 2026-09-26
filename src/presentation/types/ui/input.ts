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
    | 'email'
    | 'password'

export interface InputSelect {
    id: number;
    value:string;
}

export type InputValueMap = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    companyName: string;
    companyLogo: string;
    companyDesc: string;
    selectCompany: InputSelect | null;
}

export type InputNames = keyof InputValueMap;