import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";

export function useUpdateTicketStatus(id: string) {
    const utils = trpc.useUtils();

    return trpc.adminTicketRouter.updateTicketStatus.useMutation({
        onSuccess: async () => {
            toast.success("Ticket status updated successfully");
            await utils.adminTicketRouter.getTicketById.invalidate({ id });
            await utils.adminTicketRouter.getAllTicket.invalidate();
        },
        onError: (err) => {
            toast.error(err.message || "Error updating ticket status");
        }
    });
}