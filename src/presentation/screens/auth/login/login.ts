import { useState } from "react";
import { useForm } from "@/presentation/hooks";
import { FormErrorMessage, FormState } from "@/presentation/types"

const formErrorMessage:FormErrorMessage = {
    'email': {
        empty:'El correo es requerido',
        invalid:'El correo no es válido'
    },
    'password': {
        empty:'La contraseña es requerida',
        invalid:'La contraseña requere mínimo 8 caracteres'
    }
}

const formInitialState:FormState = { 
    email: { 
        name:'email',
        value:'', 
        isFocus:false, 
        isValid: null, 
        status: null, 
        isRequired: true 
    },
    password: { 
        name:'password', 
        value: '', 
        isFocus:false, 
        isValid: null, 
        status: null, 
        isRequired: true 
    }
}

export const login = () => {
    const [ showPass, setShowPass ] = useState(false);
    const {
        formState, 
        setValue, 
        setFocus, 
        removeFocus, 
        clearInput, 
        isFormValid
    } = useForm(formInitialState, formErrorMessage);
    
    const submitForm = () => {
        isFormValid();
    }
    return {
        formState, 
        showPass,
        setValue, 
        setFocus, 
        removeFocus, 
        clearInput, 
        isFormValid,
        setShowPass,
        submitForm
    }
}