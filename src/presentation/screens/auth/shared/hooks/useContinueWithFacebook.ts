import { continueWithFacebookUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { 
    useAlertMessageStore, 
    useLoaderScreenStore, 
} from '@/presentation/store';
import { handleError } from '@/shared/error';
import { queryClient } from '@/config';
import { sessionQueryOptions } from '@/presentation/queries';

export const useContinueWithFacebook = (
    navigation: () => void
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);
    
    const continueWithFacebook = async () => {
        try {
            openLoaderScreen('Iniciando sesión...');
            const result = await continueWithFacebookUseCase(authRepositoryImpl);
            queryClient.setQueryData(sessionQueryOptions.queryKey, result);
            navigation();
        } catch (error) {
            const { errorCode } = handleError(error);
            if(errorCode === "DUPLICATE_EMAIL" || errorCode === "UNAUTHORIZED") {
                return openAlertMessage(
                    'error',
                    'No fue posible iniciar sesión',
                    'Ya existe una cuenta con este correo electrónico.'
                );
            }
            if(errorCode === "FORBIDDEN") {
                return openAlertMessage(
                    'error',
                    'No fue posible iniciar con este correo',
                    'La cuenta no se encuentra activa'
                );
            }
            return openAlertMessage(
                'error', 
                'No fue posible iniciar sesión', 
            )
        } finally {
            closeLoaderScreen();
        }
    }

    return {
        continueWithFacebook
    }
}