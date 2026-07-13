import { UserEntity } from "@/domain/entities";
import { create } from "zustand";

interface State {
    user: UserEntity | null;
    setUser: ( user:UserEntity|null) => void;
    removeUser:() => void;
}

export const useUserStore = create<State>()((set, get) => ({
    user: null,
    setUser: ( user:UserEntity|null) => {
        set({user});
    },
    removeUser:() => {
        set({user:null});
    }
}))