import { Keyboard } from "react-native";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useReducer, useState } from "react";
import { formReducer } from "../reducers/simpleForm/formReducer";
import { FormState } from "../types/form";
import { ItemList } from "../types/input-list-manager";
import { AlertState } from "../types/alerts";
import { useForm } from "../hooks";

interface InitialState {
    formState: FormState;
    publishPublication: boolean;
    alertMessage: AlertState;
    setPublishPublication: Dispatch<SetStateAction<boolean>>;
    closeAlertMesssage: () => void;
    showAlertMessage: ({title, message}:{title:string, message:string}) => void;
}

export const formInitialState:FormState = {
   
    logoCompany: { name:'logoCompany', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    typeWork: { name:'typeWork', value:'', status:null, isValid:false, isFocus:false, isRequired:false},
    companyName: { name:'companyName', value:'', status:null, isValid:false, isFocus:false, isRequired:false},
    image: { name:'image', value:'', status:null, isValid:false, isFocus:false, isRequired:false},
    minimumWage: { name:'maximumWage', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    maximumWage: { name:'minimumWage', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    schedule: { name:'schedule', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    description: { name:'description', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    // requirements: { value:'', isFocus:false, isRequired:false, list:[]},
    // benefits: { value:'', isFocus:false, isRequired:false, list:[]},
    companyDesc: { name:'companyDesc', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    coords: { name:'coords', value:'', status:null, isValid:false, isFocus:false, isRequired:false },
    
}

export const CreatePublicationContext = createContext<InitialState|null>(null);

export const CreatePublicationProvider = ({children}:PropsWithChildren) => {
    const { formState } = useForm(formInitialState, {});
    const [ publishPublication, setPublishPublication ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState<AlertState>({visible:false, title:'', message:''});
   
    const showAlertMessage = ({title, message}:{title:string, message:string}) => {
        setAlertMessage({visible:true, title, message});
    }
    const closeAlertMesssage = () => {
        setAlertMessage({visible:false, title:'', message:''});
    }
    
    const createPublication = () => {
        console.log(formState);
       
        console.log('Formulario listo para procesar los datos y enviar al back');
    }
    return (
        <CreatePublicationContext.Provider 
            value={{
                formState,
                publishPublication,
                alertMessage,
                setPublishPublication,
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