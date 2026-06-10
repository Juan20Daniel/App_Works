import { FormField, InputState } from "@/presentation/types";

export const useLogin = (
    formState: Partial<Record<FormField, InputState>>,
    isFormValid: () => boolean,
) => {
    
    const login = () => {
        if(!isFormValid()) return;
        console.log(formState);
    }
    return {
        login
    }
}