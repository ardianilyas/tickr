import { authProcedure, router } from "@/server/trpc/trpc";
import { ticketService } from "../services/ticketService";
import { createTicketSchema, editTicketSchema, getTicketByIdSchema } from "../schemas/ticketSchema";
import z from "zod";

export const ticketRouter = router({
    getTicketsByUserId: authProcedure.query(async ({ ctx }) => {
       return await ticketService.getTicketByUserId(ctx.user.id);
    }),
    getTicketById: authProcedure.input(getTicketByIdSchema).query(async ({ input }) => {
        return await ticketService.getTicketById(input.id);
    }),
    getCategories: authProcedure.query(async () => {
        return await ticketService.getCategories();
    }),
    createTicket: authProcedure.input(createTicketSchema).mutation(async ({ input, ctx }) => {
        return await ticketService.createTicket(ctx.user.id, input);
    }),
    updateTicket: authProcedure.input(editTicketSchema.extend({
        id: z.string(),
    })).mutation(async ({ input }) => {
        return await ticketService.updateTicket(input.id, input);
    }),
})