import { create } from 'zustand';

interface State {
    visible: boolean;
    open: () => void;
    close: () => void;
}

export const useVisibleModalPublicOpStore = create<State>((set) => ({
    visible: false,
    open: () => set({ visible: true }),
    close: () => set({ visible: false }),
}));