import { authRepositoryImpl } from "@/data/dependencies";
import { refreshSessionUseCase } from "@/domain/useCase";
import { handleError } from "@/shared";
import { queryOptions } from "@tanstack/react-query";

export const sessionQueryOptions = queryOptions({
    queryKey:['user-session'],
    queryFn:() => refreshSessionUseCase(authRepositoryImpl),
    staleTime: Infinity,
    gcTime: Infinity, //se usa para medir cuanto tiempo se guarda una query en la cache. El tiempo empieza a correr cuando se desmonta el componente, por defecto son 5min. en este caso, no aporta mucho ya que el componente nunca se desmonta, pero se ve bonito.
    retry:(failureCount, error) => {
        const { errorCode } = handleError(error);
        if(errorCode === 'UNAUTHORIZED') return false;

        return failureCount < 2;
    }
});