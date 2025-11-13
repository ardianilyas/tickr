import { TicketPriority } from "@/lib/generated/prisma/enums";
import z from "zod";

export const createTicketSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    priority: z.enum(TicketPriority),
    categoryId: z.string()
});

export const getTicketByIdSchema = z.object({
    id: z.string(),
});

export const editTicketSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    priority: z.enum(TicketPriority),
    categoryId: z.string()
});

export type CreateTicketSchema = z.infer<typeof createTicketSchema>;
export type GetTicketByIdSchema = z.infer<typeof getTicketByIdSchema>;
export type EditTicketSchema = z.infer<typeof editTicketSchema>;