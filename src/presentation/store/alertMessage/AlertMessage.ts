import { create } from "zustand";
import { TypeAlertMessage } from "@/presentation/types";

interface State {
    type:TypeAlertMessage;
    visible:boolean;
    title:string;
    message?:string;
    openAlertMessage: (type:TypeAlertMessage, title:string, message?:string) => void;
    closeAlertMessage: () => void;
}

export const useAlertMessageStore = create<State>()((set) => ({
    type: 'success',
    visible: false,
    title: '',
    message: '',
    openAlertMessage: (type:TypeAlertMessage, title:string, message?:string) => {
        set({type, visible:true, title, message});
    },
    closeAlertMessage: () => {
        set({visible:false});
    }
}));