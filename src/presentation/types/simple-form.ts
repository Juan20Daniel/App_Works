import { InputError, InputValue } from "./input";

export interface SimpleForm {
    values:Record<string, InputValue>;
    errors:Record<string, InputError>;
}
