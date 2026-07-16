import { ErrorCodes } from "./errorCodes";

export class AppError extends Error {
    errorCode:ErrorCodes;
    originalError?: unknown;
    constructor(errorCode:ErrorCodes, message:string, originalError?:unknown) {
        super(message);
        this.errorCode = errorCode;
        this.originalError = originalError;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}