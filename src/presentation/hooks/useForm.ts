import { useReducer } from "react";
import { FormErrorMessage, FormField, FormState } from "../types/form";
import { formReducer } from "../reducers/simpleForm/formReducer";

export const useForm = (initialState:FormState, errorMessages:FormErrorMessage) => {
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const setValue = (field:FormField, value:string) => {
        dispatch({type:'SET_VALUE', field, value});
    }

    const setFocus = (field:FormField) => {
        dispatch({type:'SET_FOCUS', field});
    }

    const removeFocus = () => {
        dispatch({type:'REMOVE_FOCUS'});
    }

    const clearInput = (field:FormField) => {
        dispatch({type:'CLEAR_INPUT', field});
    }

    const clearInputs = () => {
        dispatch({type:'CLEAR_INPUTS'});
    }

    const validateForm = () => {
        dispatch({type:'VALIDATE_FORM'});
    }

    const isFormValid = () => {

    }

    return {
        formState,
        setValue,
        setFocus,
        removeFocus,
        clearInput,
        clearInputs,
        validateForm,
        isFormValid
    }
}