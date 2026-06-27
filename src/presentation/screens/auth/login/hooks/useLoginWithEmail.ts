import { useState } from "react";
import { FormField, InputState } from "@/presentation/types";
import { 
    useAlertMessageStore, 
    useAuthStore, 
    useUserStore 
} from "@/presentation/store";
import { handleError } from "@/shared";
import { signInWithEmailUseCase } from "@/domain/useCase";
import { authRepositoryImpl } from "@/data/dependencies";

export const useLoginWithEmail = (
    formState: Partial<Record<FormField, InputState>>,
    navigation: () => void,
    isFormValid: () => boolean,
) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const setUserStore = useUserStore(state => state.setUser);
    const setAutenticate = useAuthStore(state => state.setAutenticate);

    const loginWithEmail = async () => {
        if(!isFormValid()) return;
        try {
            setIsLoading(true);
            const email = formState.email?.value!;
            const password = formState.password?.value!;
            const result = await signInWithEmailUseCase(authRepositoryImpl, email, password);
            setUserStore(result.user);
            setAutenticate(true);
            navigation();
        } catch (error) {
            const {message, errorCode} = handleError(error);
            if(errorCode === "UNAUTHORIZED") {
                return openAlertMessage(
                    'error',
                    'No fue posible iniciar sesión',
                    'Usuario o contraseña incorrectos'
                );
            }
            if(errorCode === "FORBIDDEN") {
                return openAlertMessage(
                    'error',
                    'No fue posible iniciar sesión',
                    'La cuenta ya no se encuentra activa'
                );
            }
            return openAlertMessage(
                'error', 
                'Error al iniciar sesión', 
                message
            )
        } finally {
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        loginWithEmail
    }
}