import { useState } from "react";
import { RegisterUser } from "@/domain/types";
import { FormField, InputState } from "@/presentation/types";
import { registerUserUseCase } from "@/domain/useCase";
import { handleError } from "@/shared";
import { useAlertMessageStore, useAuthStore, useUserStore } from "@/presentation/store";
import { authRepositoryImpl } from "@/data/dependencies";

export const useRegister = (
    formState: Partial<Record<FormField, InputState>>, 
    navigation: () => void,
    isFormValid: () => boolean,
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const [ isLoading, setIsLoading ] = useState(false);
    const setUserStore = useUserStore(state => state.setUser);
    const setAutenticate = useAuthStore(state => state.setAutenticate);

    const register = async () => {
        if(!isFormValid()) return;
        const data:RegisterUser = {
            firstname: formState.firstname?.value!,
            lastname: formState.lastname?.value!,
            email: formState.email?.value!,
            password: formState.password?.value!
        }
        try {
            setIsLoading(true);
            const result = await registerUserUseCase(authRepositoryImpl, data);
            setUserStore(result.user);
            setAutenticate(true);
            navigation();
        } catch (error) {
            const {errorCode} = handleError(error);
            console.log(errorCode)
            if(errorCode === 'DUPLICATE_EMAIL') {
                return openAlertMessage(
                    'error',
                    'Ya existe una cuenta con este correo electrónico.', 
                    'Intenta iniciar sesión'
                );
            }
            
            return openAlertMessage(
                'error', 
                'Hubo un problema al intentar crear la cuenta',
                'vuelva a intentarlo más tarde'
            );
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        register
    }
}