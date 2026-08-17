import { FormValue } from "@/presentation/types";

export type CompanyFormValue = FormValue<
    | 'companyLogo'
    | 'companyName'
    | 'companyDesc'
>