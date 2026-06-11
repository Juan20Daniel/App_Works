import { useState } from "react";
import { RegisterUser } from "@/domain/types";
import { FormField, InputState } from "@/presentation/types";
import { registerUserUseCase } from "@/domain/useCase";
import { handleError } from "@/shared";
import { useAlertMessageStore, useAuthStore, useUserStore } from "@/presentation/store";
import { authRepositoryImpl } from "@/data/dependencies";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/presentation/navigators/StackNavigator";

export const useRegister = (
    formState: Partial<Record<FormField, InputState>>, 
    navigation: StackNavigationProp<RootStackParamList, "Register">,
    isFormValid: () => boolean,
    setError: (field: FormField, errorMessage: string) => void,
) => {
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);
    const [ isLoading, setIsLoading ] = useState(false);
    const setUserStore = useUserStore(state => state.setUser);
    const setAutenticate = useAuthStore(state => state.setAutenticate);

    const register = async () => {
        if(!isFormValid()) return;
        const data:RegisterUser = {
            firstname: formState.firstname?.value!,
            lastname: formState.lastname?.value!,
            phone: formState.phone?.value!,
            email: formState.email?.value!,
            password: formState.password?.value!
        }
        try {
            setIsLoading(true);
            const result = await registerUserUseCase(authRepositoryImpl, data);
            setUserStore(result.user);
            setAutenticate(true);
            navigation.replace("Home", {animationType:'fade'});
        } catch (error) {
            console.log(error);
            const {errorCode} = handleError(error);
            if(errorCode === 'DUPLICATE_EMAIL') {
                setError('email', 'El correo ya existe');
                return openAlertMessage(
                    'error', 
                    'Error al crear la cuenta', 
                    'El correo ya existe favor de ingresar otro.'
                );
            }
            if(errorCode === 'DUPLICATE_PHONE') {
                setError('phone', 'Este teléfono ya existe');
                return openAlertMessage(
                    'error', 
                    'Error al crear la cuenta', 
                    'El teléfono ya existe, favor de colocar otro.'
                );
            }
            console.log(error);
            return openAlertMessage(
                'error', 
                'Hubo un problema al intentar crear la cuenta, vuelva a intentarlo más tarde'
            );
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        register
    }
}