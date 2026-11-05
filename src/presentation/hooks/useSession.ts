import { useQuery } from "@tanstack/react-query";
import { sessionQueryOptions } from "../queries";

type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

export const useSession = () => {
    const { data, status, error } = useQuery(sessionQueryOptions);

    let authStatus:AuthStatus = 'checking';

    if(data) {
        authStatus = 'authenticated'
    } else if(status === 'success' || error) {
        authStatus = 'unauthenticated';
    }
    
    return {
        user: data?.user ?? null,
        authStatus,
        sessionError: !data ? error : null,
    };
};