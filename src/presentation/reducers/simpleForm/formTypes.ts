import { ItemList } from "@/presentation/types/input-list-manager";
import { FormErrorMessage } from "@/presentation/types/form";
import { InputName } from "@/presentation/types";

export type FormTypes = 
    | {type:"SET_VALUE", field:InputName, value:string}
    | {type:"SET_FOCUS", field:InputName}
    | {type:"SET_ERROR", field:InputName, errorMessage:string}
    | {type:"REMOVE_FOCUS"}
    | {type:"CLEAR_INPUT", field:InputName}
    | {type:"CLEAR_INPUTS"}
    | {type:"VALIDATE_FORM", errorMessages:FormErrorMessage}
    | {type:"ADD_TO_LIST", field:InputName, value:ItemList }
    | {type:"REMOVE_ITEM_FORM_LIST", field:InputName, itemId:number }
    | {type:"UPDATE_LIST_ITEM", field:InputName, item:ItemList }