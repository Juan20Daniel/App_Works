import { InputErrorMessage, InputState } from "./input";

export type FormField = 
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

export type FormState = Partial<Record<FormField, InputState>>;
export type FormErrorMessage = Partial<Record<FormField, InputErrorMessage>>;