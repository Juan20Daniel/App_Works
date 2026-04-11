import { Keyboard } from "react-native";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useReducer, useState } from "react";
import { simpleFormReducer } from "../reducers/simpleForm/simpleForm";
import { SimpleForm } from "../types/simple-form";
import { ItemList } from "../types/input-list-manager";
import { AlertState } from "../types/alerts";

interface InitialState {
    formState: SimpleForm;
    publishPublication: boolean;
    alertMessage: AlertState;
    setPublishPublication: Dispatch<SetStateAction<boolean>>;
    handleChange: (field:string, value:string) => void;
    putFocus: (field:string) => void;
    removeFocus: () => void;
    clearInput: (field:string) => void;
    createPublication: () => void;
    addToList: (field:string, item:ItemList) => void;
    removeItemFromList: (field:string, itemId:number) => void;
    updateListItem: (field:string, item:ItemList) => void;
    closeAlertMesssage: () => void;
    showAlertMessage: ({title, message}:{title:string, message:string}) => void;
}

export const initialStateForm:SimpleForm = {
    values: {
        logoCompany: { value:'', isFocus:false, isRequired:false },
        typeWork: { value:'', isFocus:false, isRequired:false },
        companyName: { value:'', isFocus:false, isRequired:false },
        image: { value:'', isFocus:false, isRequired:false },
        minimumWage: { value:'', isFocus:false, isRequired:false },
        maximumWage: { value:'', isFocus:false, isRequired:false },
        schedule: { value:'', isFocus:false, isRequired:false },
        description: { value:'', isFocus:false, isRequired:false },
        requirements: { value:'', isFocus:false, isRequired:false, list:[]},
        benefits: { value:'', isFocus:false, isRequired:false, list:[]},
        companyDesc: { value:'', isFocus:false, isRequired:false },
        coords: { value:'', isFocus:false, isRequired:true },
    },
    errors: {
        logoCompany: { status:null, valid:null },
        typeWork: { status:null, valid:null },
        image: { status:null, valid:null },
        companyName: { status:null, valid:null },
        minimumWage: { status:null, valid:null },
        maximumWage: { status:null, valid:null },
        schedule: { status:null, valid:null },
        description: { status:null, valid:null },
        companyDesc: { status:null, valid:null },
        requirements: { status:null, valid:null },
        benefits: { status:null, valid:null },
        coords: { status:null, valid:null },
    }
}

export const CreatePublicationContext = createContext<InitialState|null>(null);

export const CreatePublicationProvider = ({children}:PropsWithChildren) => {
    const [ formState, dispatch ] = useReducer(simpleFormReducer, initialStateForm);
    const [ publishPublication, setPublishPublication ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState<AlertState>({visible:false, title:'', message:''});
    const handleChange = (field:string, value:string) => {
        dispatch({
            type:'CHANGE_INPUT',
            field:field,
            value:value
        });
    }
    const putFocus = (field:string) => {
        dispatch({
            type:'PUT_FOCUS_INPUT',
            field:field
        });
    }
    const clearInput = (field:string) => {
        dispatch({
            type:'CLEAR_INPUT',
            field:field
        });
    }
    const removeFocus = () => {
        dispatch({
            type:'REMOVE_FOCUS_INPUT'
        });
        Keyboard.dismiss();
    }
    const addToList = (field:string, item:ItemList) => {
        dispatch({
            type:'ADD_TO_LIST',
            field: field,
            value:item,
        });
    }
    const removeItemFromList = (field:string, itemId:number) => {
        dispatch({
            type:'REMOVE_ITEM_FORM_LIST',
            field: field,
            itemId:itemId
        });
    }
    const updateListItem = (field:string, item:ItemList) => {
        dispatch({
            type:'UPDATE_LIST_ITEM',
            field:field,
            item:item
        });
    }
    const showAlertMessage = ({title, message}:{title:string, message:string}) => {
        setAlertMessage({visible:true, title, message});
    }
    const closeAlertMesssage = () => {
        setAlertMessage({visible:false, title:'', message:''});
    }
    const validateForm = () => {
        let isValidForm = true;
        for(const camp in formState.values) {
            if(!formState.values[camp].isRequired) {
                continue;
            }
            if(!formState.errors[camp].valid) {
                isValidForm = false;
                break;
            }
        }
        if(!isValidForm) {
            showAlertMessage({
                title:'No fue posible crear la publicación.',
                message:'Hay un problema en uno de los campos.'
            });
        }
        return isValidForm;
    }
    const verifyContantPublication = () => {
        if(formState.values.image.value !== '') {
            return true;
        }
        if(formState.values.typeWork.value !== '' && formState.values.description.value !== '') {
            return true;
        }
        if(formState.values.typeWork.value !== '' && formState.values.requirements.list?.length! > 0) {
            return true;
        }
        showAlertMessage({
            title:'No hay suficiente información para crear la publicación',
            message:'Carga alguna imagen o coloca el tipo de trabajo y la descripción del trabajo al menos.'
        });
        return false;
    }
    const createPublication = () => {
        console.log(formState);
        dispatch({
            type:'VALIDATE_FORM'
        });
        if(!validateForm() || !verifyContantPublication()) return;
        
        console.log('Formulario listo para procesar los datos y enviar al back');
    }
    return (
        <CreatePublicationContext.Provider 
            value={{
                formState,
                publishPublication,
                alertMessage,
                setPublishPublication,
                handleChange,
                putFocus,
                removeFocus,
                clearInput,
                createPublication,
                addToList,
                removeItemFromList,
                updateListItem,
                closeAlertMesssage,
                showAlertMessage
            }}
        >
            {children}
        </CreatePublicationContext.Provider>
    );
}

export const useCreatePublication = () => {
    const context = useContext(CreatePublicationContext);
    if(!context) {
        throw new Error("useCreatePublication debe usarse dentro de un CreatePublicationProvider");       
    }
    return context;
}