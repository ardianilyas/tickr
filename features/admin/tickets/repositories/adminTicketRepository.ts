import { prisma } from "@/lib/db/prisma"
import { TicketStatus } from "@/lib/generated/prisma/enums";

export const adminTicketRepository = {
    async getAllTickets() {
        return await prisma.ticket.findMany({ orderBy: { createdAt: "desc" } })
    },

    async getTicketById(id: string) {
        return await prisma.ticket.findUnique({
            where: { id },
            include: {
                assigned: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                category: {
                    select: {
                        name: true
                    }
                },
                creator: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        });
    },

    async updateTicketStatus(id: string, status: TicketStatus, assignedId: string) {
        return await prisma.ticket.update({
            data: { status, assignedId },
            where: { id },
        })
    },

    async getTicketByStatus(status: TicketStatus) {
        return await prisma.ticket.findMany({
            where: { status },
            orderBy: { createdAt: "desc" },
        });
    },
}