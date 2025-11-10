import { trpc } from "@/lib/trpc/client";

export function useGetTicketById(id: string) {
    return trpc.adminTicketRouter.getTicketById.useQuery({ id });
}