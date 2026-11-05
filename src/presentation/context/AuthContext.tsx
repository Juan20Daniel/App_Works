import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { sessionQueryOptions } from "../queries";
import { useQuery } from "@tanstack/react-query";
import { useOnPullToRefresh } from "../hooks";

interface InitialState {
    isPullRefreshing: boolean;
    onPullToRefresh: () => Promise<void>;
}

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider = ({children}:PropsWithChildren) => {
    const { refetch } = useQuery(sessionQueryOptions);
    const { isPullRefreshing, onPullToRefresh } = useOnPullToRefresh(async () => refetch());

    const value = useMemo(() => {
        return {
            isPullRefreshing,
            onPullToRefresh
        }
    },[isPullRefreshing, onPullToRefresh]);
    
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('The context useAuthContext needs to be inside AuthProvider');
    }

    return context;
}