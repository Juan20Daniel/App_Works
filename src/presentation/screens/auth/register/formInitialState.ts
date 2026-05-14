import { FormState } from "@/presentation/types";

export const formInitialState:FormState = {
    'firstname': {
        name: 'firstname', 
        value: '', 
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false 
    },
    'lastname': {
        name: 'lastname', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'phone': {
        name: 'phone', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'email': {
        name: 'email', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    },
    'password': {
        name: 'password', 
        value: '',
        isFocus: false,
        status: null,
        isRequired: true,
        isValid: false
    }
}