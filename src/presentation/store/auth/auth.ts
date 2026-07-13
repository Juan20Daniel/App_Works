import { create } from "zustand";

interface State {
    isLoading: boolean;
    isAutenticated: boolean;
    autenticate: () => void;
    deauthenticate: () => void;
}

export const useAuthStore = create<State>()((set) => ({
    isLoading: true,
    isAutenticated: false,
    autenticate: () => {
        set({
            isAutenticated: true,
            isLoading: false
        });
    },
    deauthenticate: () => {
        set({
            isAutenticated: false,
            isLoading: false
        });
    }
}));