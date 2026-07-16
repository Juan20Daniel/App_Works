import { RegisterUser } from "@/domain/types";
import { FormField, InputState } from "@/presentation/types";
import { registerUserUseCase } from "@/domain/useCase";
import { handleError } from "@/shared/error";
import {
    useAlertMessageStore,
    useAuthStore,
    useLoaderScreenStore,
    useUserStore
} from "@/presentation/store";
import { authRepositoryImpl } from "@/data/dependencies";

export const useRegister = (
    formState: Partial<Record<FormField, InputState>>, 
    navigation: () => void,
    isFormValid: () => boolean,
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const setUserStore = useUserStore(state => state.setUser);
    const autenticate = useAuthStore(state => state.autenticate);
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);

    const register = async () => {
        if(!isFormValid()) return;
        const data:RegisterUser = {
            firstname: formState.firstname?.value!,
            lastname: formState.lastname?.value!,
            email: formState.email?.value!,
            password: formState.password?.value!
        }
        try {
            openLoaderScreen('Registrando usuario...')
            const result = await registerUserUseCase(authRepositoryImpl, data);
            setUserStore(result.user);
            autenticate();
            navigation();
        } catch (error) {
            const {errorCode} = handleError(error);
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
            closeLoaderScreen();
        }
    }

    return {
        register
    }
}