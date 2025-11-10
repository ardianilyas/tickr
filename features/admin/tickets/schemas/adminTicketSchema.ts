import { TicketStatus } from "@/lib/generated/prisma/enums";
import z from "zod";

export const getTicketByIdSchema = z.object({
    id: z.string(),
});

export const updateTicketStatusSchema = z.object({
    id: z.string(),
    status: z.enum(TicketStatus),
});

export const getTicketByStatusSchema = z.object({
    status: z.enum(TicketStatus),
})

export type GetTicketByIdSchema = z.infer<typeof getTicketByIdSchema>;
export type UpdateTicketStatusSchema = z.infer<typeof updateTicketStatusSchema>;
export type GetTicketByStatusSchema = z.infer<typeof getTicketByStatusSchema>;