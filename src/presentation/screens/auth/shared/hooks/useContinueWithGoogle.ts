import { continueWithGoogleUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { 
    useAlertMessageStore, 
    useLoaderScreenStore, 
} from '@/presentation/store';
import { handleError } from '@/shared/error';
import { sessionQueryOptions } from '@/presentation/queries';
import { queryClient } from '@/config';

export const useContinueWithGoogle = (
    navigation: () => void
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);
    
    const continueWithGoogle = async () => {
        try {
            openLoaderScreen('Iniciando sesión...');
            const result = await continueWithGoogleUseCase(authRepositoryImpl);
            queryClient.setQueryData(sessionQueryOptions.queryKey, result);
            navigation();
        } catch (error) {
            console.log(error);
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
        continueWithGoogle
    }
}