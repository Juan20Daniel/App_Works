import { AppError } from "./appError";

export const handleError = (error:unknown):AppError => {
    console.log(error);
    if(error instanceof AppError) {
        return error;
    }

    if(typeof error === 'object' && error !== null && 'response' in error) {
        const errorData = (error as any).response.data
        
        const { errorCode, message } = errorData;
        return new AppError(errorCode, message, error);
        
    }
    if(typeof error === 'object' && error !== null && 'code' in error) {
        if (error.code === 'ERR_NETWORK') {
            return new AppError(
                'NETWORK_ERROR',
                'No fue posible conectar con el servidor, intente más tarde.',
                error
            );
        }
    
        if (error.code === 'ECONNABORTED') {
            return new AppError(
                'TIMEOUT',
                'La solicitud excedió el tiempo de espera',
                error
            );
        }
    }

    return new AppError('UNKNOWN_ER', 'Error desconocido', error);
}