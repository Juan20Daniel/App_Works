import * as company from "@/domain/useCase";
import { CompanyFormValue } from "../types";
import { companyRepositoryImpl } from "@/data/dependencies";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { useAlertMessageStore, useLoaderScreenStore } from "@/presentation/store";
import { handleError } from "@/shared";

export const useCreateCompany = () => {
    const openLoaderScreen = useLoaderScreenStore(state => state.openLoader);
    const closeLoaderScreen = useLoaderScreenStore(state => state.closeLoader);
    const openAlertMessage = useAlertMessageStore(state => state.openAlertMessage);

    const fetch = async (data:CompanyFormValue) => {
        openLoaderScreen();
       
        return await company.createUseCase(companyRepositoryImpl, data);
    }

    const mutation = useMutation({
        mutationFn:fetch,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            const err = handleError(error);
            if(err.errorCode === 'NETWORK_ERROR') {
                return openAlertMessage(
                    'error',
                    'No fue posible crear la empresa',
                    'No se logró establecer conexión con el servidor, intente mas tarde'
                );
            }
            if(err.errorCode === 'TIMEOUT') {
                return openAlertMessage(
                    'error',
                    'No fue posible crear la empresa',
                    'El servidor tardo mucho en contesta, intente mas tarde'
                );
            }
            
            return openAlertMessage(
                'error',
                'No fue posible crear la empresa',
                'Error desconocido, intente mas tarde'
            );
        },
        onSettled: () => {
            closeLoaderScreen();
        }
    });
    
    const onSubmit: SubmitHandler<CompanyFormValue> = (data) => {
        mutation.mutate(data);
    }
    return {
        isLoading: mutation.isPending,
        createCompany:onSubmit
    }
}
