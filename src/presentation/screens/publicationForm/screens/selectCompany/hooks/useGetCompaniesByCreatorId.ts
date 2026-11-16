import { companyRepositoryImpl } from "@/data/dependencies";
import { CompanyEntity } from "@/domain/entities";
import { getCompaniesUseCase } from "@/domain/useCase";
import { usePaginatedQuery } from "@/presentation/hooks";
import { companyKeys } from "@/presentation/queryKeys";

const sleep = (ms: number) => new Promise((r) => setTimeout(() => r(true), ms))

export const useCompaniesByCreatorId = (creatorId:string) => {
    const {
        data, 
        isPending, //Cuando se hace un query
        isLoading, //Cuando se hace el primer query
        error, 
        isError,
        isFetchNextPageError,
        loadMore, 
        refetch,
        fetchNextPage,
    } = usePaginatedQuery<CompanyEntity>({
        queryKey:companyKeys.list({createdBy:creatorId}),
        queryFn:async (page) => {
            await sleep(5000);
            return getCompaniesUseCase(companyRepositoryImpl, {createdBy:creatorId, page})
        }
    });


    return {
        companies:data,
        isLoading,
        isPending,
        error,
        isError,
        isFetchNextPageError,
        loadMore,
        refetch,
        fetchNextPage,
    }
}