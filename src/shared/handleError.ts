type ErrorCodes =
    |   'VALIDATION'
    |   'BAD_REQUEST'
    |   'DUPLICATE_EMAIL'
    |   'DUPLICATE_PHONE'
    |   'UNAUTHORIZED'
    |   'NOT_FOUND'
    |   'INTERNAL_SERVER'
    |   'UNKNOWN_ER'
    |   'NETWORK_ERROR'
    |   'TIMEOUT'
    |   'FORBIDDEN'


export class AppError extends Error {
    errorCode:ErrorCodes;
    isOperational:boolean;
    originalError?: unknown;
    constructor(errorCode:ErrorCodes, message:string, isOperational:boolean, originalError?:unknown) {
        super(message);
        this.errorCode = errorCode;
        this.isOperational = isOperational;
        this.originalError = originalError;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export const handleError = (error:any) => {
    console.log(error);
    if(error.response) {
        const errorData = error.response.data;
       
        const { errorCode, message } = errorData;
        return new AppError(errorCode, message, true, error);
    }
    if (error.code === 'ERR_NETWORK') {
        return new AppError(
            'NETWORK_ERROR',
            'No fue posible conectar con el servidor, intente más tarde.',
            true,
            error
        );
    }

    if (error.code === 'ECONNABORTED') {
        return new AppError(
            'TIMEOUT',
            'La solicitud excedió el tiempo de espera',
            true,
            error
        );
    }

    return new AppError('UNKNOWN_ER', 'Error desconocido', false, error);
}