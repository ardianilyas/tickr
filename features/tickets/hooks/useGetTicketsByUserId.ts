import { trpc } from "@/lib/trpc/client";

export function useGetTicketsByUserId() {
    return trpc.ticketRouter.getTicketsByUserId.useQuery();
}