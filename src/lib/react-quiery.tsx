import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

interface Props {
    children?: React.ReactNode
}

export function ReactQueryProvider({ children }:Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
