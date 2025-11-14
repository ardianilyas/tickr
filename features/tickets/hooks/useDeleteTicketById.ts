import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";

export function useDeleteTicketById() {
    const utils = trpc.useUtils();

    return trpc.ticketRouter.deleteTicketById.useMutation({
        onSuccess: () => {
            toast.success("Ticket deleted successfully");
            utils.ticketRouter.getTicketsByUserId.invalidate();
        }
    });
}