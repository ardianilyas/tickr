import { prisma } from "@/lib/db/prisma"
import { CreateTicketSchema } from "../schemas/ticketSchema";

export const ticketRepository = {
    async getTicketsByUserId (userId: string) {
        return await prisma.ticket.findMany({
            where: { creatorId: userId },
            orderBy: { createdAt: "desc" },
        });
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
    }
}