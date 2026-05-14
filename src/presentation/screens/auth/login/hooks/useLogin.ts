export const useLogin = (isFormValid: () => boolean) => {
    
    const login = () => {
        isFormValid();
    }
    return {
        login
    }
}