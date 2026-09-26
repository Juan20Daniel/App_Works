import { FormValue } from "@/presentation/types";

export type LoginFormValue = FormValue<
    | 'email'
    | 'password'
>