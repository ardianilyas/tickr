'use client'

import { trpc, trpcClientOptions } from "@/lib/trpc/client";
import { handleTrpcError } from "@/lib/trpc/trpcErrorHandler";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export function TRPCProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const [queryClient] = useState(() => {
        const qc = new QueryClient({
            queryCache: new QueryCache({
                onError: (error) => handleTrpcError(error, router),
            }),
            mutationCache: new MutationCache({
                onError: (error) => handleTrpcError(error, router),
            }),
            defaultOptions: {
                queries: {
                    staleTime: 1000 * 60 * 5,
                    gcTime: 1000 * 60 * 10,
                    retry: false,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: true,
                },
            },
        });
        return qc;
    });

    const [trpcClient] = useState(() =>
        trpc.createClient({
            ...trpcClientOptions,
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}