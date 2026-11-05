import { registerUserUseCase } from "@/domain/useCase";
import { handleError } from "@/shared/error";
import {
    useAlertMessageStore,
    useLoaderScreenStore,
} from "@/presentation/store";
import { authRepositoryImpl } from "@/data/dependencies";
import { RegisterFormValue } from "../type";
import { queryClient } from "@/config";
import { sessionQueryOptions } from "@/presentation/queries";

export const useRegister = (
    navigation: () => void,
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);

    const register = async (data:RegisterFormValue) => {
        try {
            openLoaderScreen('Registrando usuario...')
            const result = await registerUserUseCase(authRepositoryImpl, data);
            queryClient.setQueryData(sessionQueryOptions.queryKey, result);
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