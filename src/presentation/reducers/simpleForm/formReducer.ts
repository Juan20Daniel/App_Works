import { FormTypes } from "./formTypes";
import { expretions } from "@/shared/regex";
import { FormState } from "@/presentation/types/form";
import { InputState } from "@/presentation/types/input";

export const formReducer = (state:FormState, action:FormTypes) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                [action.field]:{
                    ...state[action.field],
                    value:action.value,
                    isValid: expretions[action.field].test(action.value)
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
                state[camp] = {
                    ...state[camp],
                    isValid: expretions[camp].test(state[camp]!.value)
                } as InputState;
            })
            return {...state}
        default:
            return state;
    }
}