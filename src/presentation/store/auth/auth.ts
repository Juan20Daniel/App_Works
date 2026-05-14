import { authRepositoryImpl } from "@/data/dependencies";
import { create } from "zustand";

interface State {
    isAutenticated: boolean;
    setAutenticate: (autenticate:boolean) => void;
    autenticate: () => Promise<boolean>;
}

export const useAuthStore = create<State>()((set, get) => ({
    isAutenticated: false,
    setAutenticate: (autenticate:boolean) => {
        set({isAutenticated:autenticate});
    },
    autenticate: async () => {
        const isAutenticate = get().isAutenticated;
        if(isAutenticate) return true;
        const auth = await authRepositoryImpl.getAuth();
        return !!auth;
    }
}));