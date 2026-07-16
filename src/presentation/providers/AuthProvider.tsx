import { useLayoutEffect } from "react";
import { authRepositoryImpl } from "@/data/dependencies";
import { refreshSessionUseCase } from "@/domain/useCase";
import { useAuthStore, useUserStore } from "../store";
import { Settings } from 'react-native-fbsdk-next';

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}:Props) => {
    const setUser = useUserStore(state => state.setUser);
    const autenticate = useAuthStore(state => state.autenticate);
    const deauthenticate = useAuthStore(state => state.deauthenticate);

    useLayoutEffect(() => {
        const refreshSession =  async () => {
            try {
                const result = await refreshSessionUseCase(authRepositoryImpl);
                if(!result) {
                    setUser(null);
                    deauthenticate();
                    return;
                }
                setUser(result.user);
                autenticate();
            } catch (error) {
                setUser(null);
                deauthenticate();
            }
        }
        refreshSession();
    },[]);

    useLayoutEffect(() => {
        Settings.initializeSDK();
    }, []);
    
    return (
        <>
            {children}
        </>
    );
}
//Si se requiere hacer peticiones justo al iniciar la app pero que dependen de la autenticación
//Separa y hacer lo en AppProvider