import { FormField } from "./form";

export interface InputState {
    name: FormField;
    value: string;
    isFocus: boolean;
    isValid: boolean | null;
    status: InputStatus;
    errorMessage?: string;
    isRequired: boolean;
}

export type InputStatus = null|'empty'|'valid'|'invalid';

export type InputErrorMessage = {
    empty: string;
    invalid?: string;
    generic?: string;
}