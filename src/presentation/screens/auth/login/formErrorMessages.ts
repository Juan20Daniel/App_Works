import { FormErrorMessage, FormState } from "@/presentation/types";

export const formErrorMessage:FormErrorMessage = {
    'email': {
        empty:'El correo es requerido',
        invalid:'El correo no es válido'
    },
    'password': {
        empty:'La contraseña es requerida',
        invalid:'La contraseña requiere mínimo 8 caracteres'
    }
}