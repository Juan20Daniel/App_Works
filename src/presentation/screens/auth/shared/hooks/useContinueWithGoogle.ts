import { useState } from 'react';
import { continueWithGoogleUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';
import { useAlertMessageStore, useAuthStore, useUserStore } from '@/presentation/store';
import { handleError } from '@/shared';

export const useContinueWithGoogle = (
    navigation: () => void
) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const setUserStore = useUserStore(state => state.setUser);
    const setAutenticate = useAuthStore(state => state.setAutenticate);
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);

    const continueWithGoogle = async () => {
        try {
            setIsLoading(true);
            const result = await continueWithGoogleUseCase(authRepositoryImpl);
            setUserStore(result.user);
            setAutenticate(true);
            navigation();
        } catch (error) {
            const {message, errorCode} = handleError(error);
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
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        continueWithGoogle
    }
}