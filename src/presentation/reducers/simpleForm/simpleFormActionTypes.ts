import { ItemList } from "@/presentation/types/input-list-manager";
import { SimpleForm } from "@/presentation/types/simple-form";

export type SimpleFormActionTypes = 
    | {type:"CHANGE_INPUT", field:string, value:string}
    | {type:"PUT_FOCUS_INPUT", field:string}
    | {type:"REMOVE_FOCUS_INPUT"}
    | {type:"CLEAR_INPUT", field:string}
    | {type:"CLEAR_INPUTS", form:SimpleForm}
    | {type:"VALIDATE_FORM"}
    | {type:"ADD_TO_LIST", field:string, value:ItemList }
    | {type:"REMOVE_ITEM_FORM_LIST", field:string, itemId:number }
    | {type:"UPDATE_LIST_ITEM", field:string, item:ItemList }