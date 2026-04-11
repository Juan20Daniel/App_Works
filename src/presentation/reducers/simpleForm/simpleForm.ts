import { SimpleFormActionTypes } from "./simpleFormActionTypes";
import { expretions } from "@/shared/regex";
import { SimpleForm } from "@/presentation/types/simple-form";
import { getFieldWithFocus } from "../../helpers/getFieldWithFocus";

export const simpleFormReducer = (state:SimpleForm, action:SimpleFormActionTypes) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], value:action.value}
                },
                errors: {
                    ...state.errors,
                    [action.field]:{
                        ...state.errors[action.field],
                        valid: action.value === ''
                            ? null
                            : expretions[action.field].test(action.value) 
                    }
                }
            }
        case 'PUT_FOCUS_INPUT':
            let lastFocus = getFieldWithFocus(state.values);
            if(lastFocus) {
                return {
                    ...state,
                    values: {
                        ...state.values,
                        [lastFocus]:{...state.values[lastFocus], isFocus:false},
                        [action.field]:{...state.values[action.field], isFocus:true}
                    }
                }
            }
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], isFocus:true}
                }
            }
        case 'REMOVE_FOCUS_INPUT':
           let actualFieldWithFocus = getFieldWithFocus(state.values);
           if(!actualFieldWithFocus) return {...state};
            return {
                ...state,
                values: {
                    ...state.values,
                    [actualFieldWithFocus]:{...state.values[actualFieldWithFocus], isFocus:false}
                }
            }
        case 'CLEAR_INPUT': 
            return {
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], value:''}
                },
                errors: {
                    ...state.errors,
                    [action.field]:{status:null, valid:null}
                }
            }
        case 'CLEAR_INPUTS':
            return {...action.form}
        case 'VALIDATE_FORM':
            const errors = state.errors;
            for(let camp in errors) {
                if(state.values[camp].isRequired || state.values[camp].value !== '') {
                    if(errors[camp].valid === null) {
                        errors[camp] = {...errors[camp], status:'empty'}
                    } else if(!errors[camp].valid) {
                        errors[camp] = {...errors[camp], status:'invalid'}
                    } else {
                        errors[camp] = {...errors[camp], status:'valid'}
                    }
                }
            }
            return {...state, errors}
        case 'ADD_TO_LIST': {
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]: {
                        ...state.values[action.field],
                        list:[
                            ...state.values[action.field].list??[], 
                            action.value
                        ],
                        value:'',
                    }
                }
            }
        }
        case 'REMOVE_ITEM_FORM_LIST': {
            const newList = state.values[action.field].list?.filter(item => {
                return item.id !== action.itemId
            });
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{
                        ...state.values[action.field], 
                        list:newList
                    }
                }
            }
        }
        case 'UPDATE_LIST_ITEM': {
            const updateList = state.values[action.field].list?.map(item => {
                return item.id === action.item.id ? action.item : item
            });
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{
                        ...state.values[action.field], 
                        value:'', 
                        list:updateList
                    }
                }
            }
        }
        default:
            return state;
    }
}