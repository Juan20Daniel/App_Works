import { useState } from 'react';
import { continueWithGoogleUseCase } from '@/domain/useCase';
import { authRepositoryImpl } from '@/data/dependencies';

export const useContinueWithGoogle = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    const continueWithGoogle = async () => {
        try {
            setIsLoading(true);
            const result = await continueWithGoogleUseCase(authRepositoryImpl);
            console.log(result);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        continueWithGoogle
    }
}