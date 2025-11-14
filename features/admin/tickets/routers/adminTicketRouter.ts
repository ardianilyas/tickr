import { adminProcedure, router } from "@/server/trpc/trpc";
import { adminTicketService } from "../services/adminTicketService";
import { getTicketByIdSchema, getTicketByStatusSchema, updateTicketStatusSchema } from "../schemas/adminTicketSchema";

export const adminTicketRouter = router({
    getAllTicket: adminProcedure.query(async () => {
        return await adminTicketService.getAllTickets();
    }),
    getTicketById: adminProcedure.input(getTicketByIdSchema).query(async ({ input }) => {
        return await adminTicketService.getTicketById(input.id);
    }),
    updateTicketStatus: adminProcedure.input(updateTicketStatusSchema).mutation(async ({ input, ctx }) => {
        return await adminTicketService.updateTicketStatus(input.id, input.status, ctx.user.id);
    }),
    getTicketByStatus: adminProcedure.input(getTicketByStatusSchema).query(async ({ input }) => {
        return await adminTicketService.getTicketByStatus(input.status);
    }),
});