import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { AuthRepositoryImpl } from "@/data/repositories";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RegisterUser } from "@/domain/types";
import { registerUser } from "@/domain/useCase";
import { useForm } from "@/presentation/hooks";
import { useAlertMessageStore } from "@/presentation/store";
import { FormErrorMessage, FormState } from "@/presentation/types"
import { handleError } from "@/shared";

const authResponseImpl = new AuthRepositoryImpl();

const formErrorMessage:FormErrorMessage = {
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

const formInitialState:FormState = {
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

export const register = () => {
    const [ keyboardVisible, setKeyboarVisible ] = useState(false);
    const [ showPass, setShowPass ] = useState(false);
    const { top, bottom } = useSafeAreaInsets();
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const { 
        formState, 
        setFocus, 
        setValue,
        setError,
        clearInput, 
        removeFocus, 
        isFormValid,
    } = useForm(formInitialState, formErrorMessage);
    
    useEffect(() => {
        const showSubsciption = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboarVisible(true);
        })
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboarVisible(false);
        });
        return () => {
            showSubsciption.remove();
            hideSubscription.remove();
        }; 
    },[]);
    
    const register = async () => {
        if(!isFormValid()) return;
        const data:RegisterUser = {
            firstname: formState.firstname?.value!,
            lastname: formState.lastname?.value!,
            phone: formState.phone?.value!,
            email: formState.email?.value!,
            password: formState.password?.value!
        }
        try {
            await registerUser(authResponseImpl, data);
            
        } catch (error) {
            const {errorCode} = handleError(error);
            if(errorCode === 'DUPLICATE_EMAIL') {
                setError('email', 'El correo ya existe');
                return openAlertMessage(
                    'error', 
                    'Error al crear la cuenta', 
                    'El correo ya existe favor de ingresar otro.'
                );
            }
            if(errorCode === 'DUPLICATE_PHONE') {
                setError('phone', 'Este teléfono ya existe');
                return openAlertMessage(
                    'error', 
                    'Error al crear la cuenta', 
                    'El teléfono ya existe, favor de colocar otro.'
                );
            }
            console.log(error);
            return openAlertMessage(
                'error', 
                'Hubo un problema al intentar crear la cuenta, vuelva a intentarlo más tarde'
            );
        }
    }

    return {
        top,
        bottom,
        showPass,
        formState, 
        keyboardVisible,
        setShowPass,
        setFocus, 
        setValue,
        setError,
        clearInput, 
        removeFocus, 
        isFormValid,   
    }
}