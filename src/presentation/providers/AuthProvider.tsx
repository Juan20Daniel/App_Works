import { authRepositoryImpl } from "@/data/dependencies";
import { useLayoutEffect } from "react";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({children}:Props) => {

    useLayoutEffect(() => {
        const getAuth =  async() => {
            const auth = await authRepositoryImpl.getAuth();
            console.log(auth);
        }
        getAuth();
    },[]);
    
    return (
        <>
            {children}
        </>
    );
}