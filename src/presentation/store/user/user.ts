import { UserEntity } from "@/domain/entities";
import { create } from "zustand";

interface State {
    user: UserEntity | null;
    setUser: ( user:UserEntity ) => void;
    getUser: () => UserEntity | null;
    removeUser:() => void;
}

export const useUserStore = create<State>()((set, get) => ({
    user: null,
    setUser: ( user:UserEntity ) => {
        set({user});
    },
    getUser: () => {
        const user = get().user;
        return user;
    },
    removeUser:() => {
        set({user:null});
    }
}))