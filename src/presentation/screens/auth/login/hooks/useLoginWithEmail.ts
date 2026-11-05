import { 
    useAlertMessageStore, 
    useLoaderScreenStore
} from "@/presentation/store";
import { handleError } from "@/shared/error";
import { signInWithEmailUseCase } from "@/domain/useCase";
import { authRepositoryImpl } from "@/data/dependencies";
import { LoginFormValue } from "../types";
import { sessionQueryOptions } from "@/presentation/queries";
import { queryClient } from "@/config";

export const useLoginWithEmail = (
    navigation: () => void
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);

    const loginWithEmail = async (data:LoginFormValue) => {
        try {
            openLoaderScreen('Iniciando sesión...');
            const email = data.email;
            const password = data.password;
            const result = await signInWithEmailUseCase(authRepositoryImpl, email, password);
            queryClient.setQueryData(sessionQueryOptions.queryKey, result);
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
            closeLoaderScreen();
        }
    }
    return {
        loginWithEmail
    }
}