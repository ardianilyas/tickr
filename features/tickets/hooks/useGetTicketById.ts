import { trpc } from "@/lib/trpc/client";

export function useGetTicketById(id: string) {
    return trpc.ticketRouter.getTicketById.useQuery(
        { id },
        {
            enabled: !!id,
            refetchOnMount: "always",
            refetchOnWindowFocus: true,
            refetchOnReconnect: true, 
            staleTime: 0,                 
        }
    );
}