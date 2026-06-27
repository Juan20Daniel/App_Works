import { FormState } from "@/presentation/types";

export const formInitialState = ():FormState => ({
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
});