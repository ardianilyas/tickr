import { prisma } from "@/lib/db/prisma"
import { CreateTicketSchema, EditTicketSchema } from "../schemas/ticketSchema";

export const ticketRepository = {
    async getTicketsByUserId (userId: string) {
        return await prisma.ticket.findMany({
            where: { creatorId: userId },
            orderBy: { createdAt: "desc" },
        });
    },

    async getTicketById(id: string) {
        return await prisma.ticket.findUnique({ where: { id } });
    },

    async getcategories() {
        return await prisma.category.findMany();
    },

    async createTicket(userId: string, data: CreateTicketSchema) {
        return await prisma.ticket.create({
            data: {
                ...data,
                creatorId: userId
            }
        })
    },

    async updateTicket(id: string, data: EditTicketSchema) {
        return await prisma.ticket.update({
            where: { id },
            data
        });
    }
}