import { FormValue } from "@/presentation/types";

export type RegisterFormValue = FormValue<
    | 'firstname'
    | 'lastname'
    | 'email'
    | 'password'
>