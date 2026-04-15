import { ItemList } from "@/presentation/types/input-list-manager";
import { FormField } from "@/presentation/types/form";

export type FormTypes = 
    | {type:"SET_VALUE", field:FormField, value:string}
    | {type:"SET_FOCUS", field:FormField}
    | {type:"REMOVE_FOCUS"}
    | {type:"CLEAR_INPUT", field:FormField}
    | {type:"CLEAR_INPUTS"}
    | {type:"VALIDATE_FORM"}
    | {type:"ADD_TO_LIST", field:FormField, value:ItemList }
    | {type:"REMOVE_ITEM_FORM_LIST", field:FormField, itemId:number }
    | {type:"UPDATE_LIST_ITEM", field:FormField, item:ItemList }