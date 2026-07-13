import { create } from "zustand";

interface State {
    visible: boolean;
    message: string | null;
    openLoader: (loadMessage?:string) => void;
    closeLoader: () => void;
}

export const useLoaderScreenStore = create<State>()((set) => ({
    visible: false,
    message: 'Cargando...',
    openLoader: (message?:string) => {
        set({
            visible:true,
            message:message??'Cargando...'
        });
    },
    closeLoader: () => {
        set({
            visible:false
        });
    }
}));