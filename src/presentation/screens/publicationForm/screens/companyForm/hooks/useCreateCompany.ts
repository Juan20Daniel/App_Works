import { SubmitHandler } from "react-hook-form";
import { CompanyFormValue } from "../types";

export const useCreateCompany = () => {
    const createCompany:SubmitHandler<CompanyFormValue> = async (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        createCompany
    }
}
