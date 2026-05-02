import { FormTypes } from "./formTypes";
import { expretions } from "@/shared/regex";
import { FormState } from "@/presentation/types/form";
import { InputState, InputStatus } from "@/presentation/types/input";

export const formReducer = (state:FormState, action:FormTypes) => {
    switch (action.type) {
        case 'SET_VALUE':
            const isValid = (state[action.field]?.isRequired || state[action.field]?.value !== '') 
                ?   expretions[action.field].test(action.value)
                :   true
            return {
                ...state,
                [action.field]:{
                    ...state[action.field],
                    value:action.value,
                    isValid: isValid
                }
            }
        case 'SET_FOCUS':
            (Object.keys(state) as (keyof typeof state)[]).forEach(camp => {
                if(state[camp]!.isFocus) {
                    state[camp] = { ...state[camp] } as InputState;
                }
            })
            return {
                ...state,
                [action.field]:{...state[action.field], isFocus:true}
            }
        case 'SET_ERROR': 
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    status: 'invalid',
                    errorMessage:action.errorMessage
                }
            }
        case 'REMOVE_FOCUS':
            (Object.keys(state) as (keyof typeof state)[]).forEach(camp => {
                if(state[camp]!.isFocus) {
                    state[camp] = { ...state[camp], isFocus:false } as InputState;
                }
            })
            return {...state}
        case 'CLEAR_INPUT': 
            return {
                ...state,
                [action.field]:{
                    ...state[action.field],
                    value:'',
                    isValid: null,
                    status: null
                }
            }
        case 'CLEAR_INPUTS':
            (Object.keys(state) as (keyof typeof state)[]).forEach(camp => {
                state[camp] = { ...state[camp], value:'', isValid:null, status:null } as InputState;
            })
            return {...state}
        case 'VALIDATE_FORM':
            (Object.keys(state) as (keyof typeof state)[]).forEach(camp => {

                const isEmpty = state[camp]?.value === '';

                const isValid = state[camp]?.isValid;

                const status:InputStatus = isValid 
                    ?   'valid'
                    :   isEmpty
                        ?   'empty'
                        :   'invalid'

                const errorMessage = isValid
                    ? null
                    : isEmpty
                        ? action.errorMessages[camp]?.empty
                        : action.errorMessages[camp]?.invalid
                state[camp] = {
                    ...state[camp],
                    status:status,
                    errorMessage:errorMessage
                } as InputState;
            })
            return {...state}
        default:
            return state;
    }
}