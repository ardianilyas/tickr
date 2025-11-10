import { trpc } from "@/lib/trpc/client";

export function useGetAllTickets() {
    return trpc.adminTicketRouter.getAllTicket.useQuery();
}