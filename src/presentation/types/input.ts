export type InputName = 
    | 'email'
    | 'password'
    | 'companyName'
    | 'image'
    | 'typeWork'
    | 'minimumWage'
    | 'maximumWage'
    | 'schedule'
    | 'image'
    | 'companyName'
    | 'logoCompany'
    | 'description'
    | 'companyDesc'
    | 'requirements'
    | 'benefits'
    | 'coords'
    | 'firstname'
    | 'lastname'
    | 'phone'

interface Input {
    name: InputName;
    value: string;
    isFocus: boolean;
    isValid: boolean | null;
    status: InputStatus;
    isRequired: boolean;
    errorMessage?: string;
}

export interface InputText extends Input {
    type: 'text';
}

export interface InputSelect {
    id: number;
    value:string;
}

export type InputState = 
    |   InputText
    |   InputSelect

export type InputStatus = 
    | null
    | 'empty'
    | 'valid'
    | 'invalid';

export type InputErrorMessage = {
    empty: string;
    invalid?: string;
    generic?: string;
}