import { TicketStatus } from "@/lib/generated/prisma/enums";
import { trpc } from "@/lib/trpc/client";

export function useGetTicketByStatus(status: TicketStatus) {
    return trpc.adminTicketRouter.getTicketByStatus.useQuery({ status });
}