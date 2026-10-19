import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 10, // 5 min: datos "frescos", no se vuelven a pedir
            gcTime: 1000 * 60 * 20,   // 10 min: tiempo en caché sin usarse
            retry: 2,                 // reintentos si la petición falla
        },
    },
});