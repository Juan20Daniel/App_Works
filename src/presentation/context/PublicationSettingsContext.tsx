import { createContext, PropsWithChildren, useContext, useState } from "react";

interface InitialState {
    showSettings: boolean;
    toggleSettings:() => void;
}

export const PublicationSettingsContext = createContext<InitialState|null>(null);

export const PublicationSettingsProvider = ({children}:PropsWithChildren) => {
    const [ showSettings, setShowSettings ] = useState(false);
    const toggleSettings = () => setShowSettings(!showSettings);
    return (
        <PublicationSettingsContext.Provider value={{showSettings, toggleSettings}}>
            {children}
        </PublicationSettingsContext.Provider>
    );
}

export const usePublicationSettings = () => {
    const context = useContext(PublicationSettingsContext);
    if(!context) {
        throw new Error("Error al usar usePublicationsSettings");
    }
    return context;
}