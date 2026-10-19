import { useCallback } from "react";
import { PaginationResult } from "@/domain/pagination";
import { InfiniteData, QueryKey, useInfiniteQuery } from "@tanstack/react-query"

interface UsePaginatedQueryOptions<T> {
    queryKey: QueryKey;
    enabled?: boolean;
    queryFn: (page:number) => Promise<PaginationResult<T>>;
}

const flattenPages = <T> (data:InfiniteData<PaginationResult<T>>): T[] => {
    return data.pages.flatMap((page) => page.items);
}

export const usePaginatedQuery = <T> ({
    queryKey,
    queryFn,
    enabled=true
}:UsePaginatedQueryOptions<T>) => {
    const query = useInfiniteQuery({
        queryKey,
        initialPageParam:1,
        enabled,
        queryFn:({pageParam}) => queryFn(pageParam),
        getNextPageParam:(lastPage) => lastPage.nextPage,
        select: flattenPages<T>,
    });

    const { hasNextPage, isFetchingNextPage, fetchNextPage } = query;

    const loadMore = useCallback(() => {
        if(hasNextPage && !isFetchingNextPage) fetchNextPage();
    },[hasNextPage, isFetchingNextPage, fetchNextPage]);

    return {
        ...query,
        items: query.data??[],
        loadMore
    }
}