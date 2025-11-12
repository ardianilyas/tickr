import { authProcedure, router } from "@/server/trpc/trpc";
import { ticketService } from "../services/ticketService";
import { createTicketSchema } from "../schemas/ticketSchema";

export const ticketRouter = router({
    getTicketsByUserId: authProcedure.query(async ({ ctx }) => {
       return await ticketService.getTicketByUserId(ctx.user.id);
    }),
    getCategories: authProcedure.query(async () => {
        return await ticketService.getCategories();
    }),
    createTicket: authProcedure.input(createTicketSchema).mutation(async ({ input, ctx }) => {
        return await ticketService.createTicket(ctx.user.id, input);
    }),
})