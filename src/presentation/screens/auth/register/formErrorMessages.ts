import { FormErrorMessage } from "@/presentation/types";

export const formErrorMessage:FormErrorMessage = {
    'firstname': {
        empty:'El nombre es requerido',
        invalid:'El nombre no es válido'
    },
    'lastname': {
        empty:'El apellido es requerido',
        invalid:'El apellido no es válido'
    },
    'phone': {
        empty: 'El teléfono es requerido',
        invalid: 'El teléfono no es válido'
    },
    'email': {
        empty: 'El corre es requerido',
        invalid: 'El correo no es válido'
    },
    'password': {
        empty: 'La contraseña es requerida',
        invalid: 'La contraseña requiere mínimo 8 caracteres'
    }
}