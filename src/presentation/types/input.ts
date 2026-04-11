import { ItemList } from "./input-list-manager";

export interface InputValue {
    value:string;
    isFocus:boolean;
    isRequired: boolean;
    list?:ItemList[]
}
export interface InputError {
    status: InputStatus;
    valid: boolean|null;
}

export type InputStatus = null|'empty'|'valid'|'invalid';