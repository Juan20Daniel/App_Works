type ErrorCodes =
    |   'VALIDATION'
    |   'BAD_REQUEST'
    |   'DUPLICATE_EMAIL'
    |   'DUPLICATE_PHONE'
    |   'UNAUTHORIZED'
    |   'NOT_FOUND'
    |   'INTERNAL_SERVER'
    |   'UNKNOWN_ER'


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
    if(error.response) {
        const errorData = error.response;
        const { errorCode, message } = errorData;
        return new AppError(errorCode, message, true, error);
    } else if(error.request) {
        console.log(error);
        console.log(error.toJSON());
        const errorCode = error.request.code;
        const message = error.request.message;

        return new AppError(errorCode, message, true, error);
    }
    return new AppError('UNKNOWN_ER', 'Error desconocido', false, error);
}