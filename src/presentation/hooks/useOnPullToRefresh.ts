import { useCallback, useState } from "react";
import { QueryObserverResult } from "@tanstack/react-query";

export const useOnPullToRefresh = <T> (refetch:() => Promise<QueryObserverResult<T | null, Error>>) => {
    const [isPullRefreshing, setIsPullRefreshing] = useState(false);

    const onPullToRefresh = useCallback(async () => {
        try {
            setIsPullRefreshing(true);
            await refetch();
        } finally {
            setIsPullRefreshing(false);
        }
    },[refetch]);

    return {
        isPullRefreshing,
        onPullToRefresh
    }
}