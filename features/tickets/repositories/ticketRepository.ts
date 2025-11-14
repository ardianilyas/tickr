/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/db/prisma"
import { CreateTicketSchema, EditTicketSchema } from "../schemas/ticketSchema";
import { TRPCError } from "@trpc/server";

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
        try {
            return await prisma.ticket.update({
                where: { id },
                data
            });
        } catch (error: any) {
            if (error.code === "P2025") {
                throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
            }
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Internal server error" })
        }
    },

    async deleteTicketById(id: string) {
        return await prisma.ticket.delete({ where: { id } });
    }
}