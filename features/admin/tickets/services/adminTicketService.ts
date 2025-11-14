import { TicketStatus } from "@/lib/generated/prisma/enums";
import { adminTicketRepository } from "../repositories/adminTicketRepository"
import { TRPCError } from "@trpc/server";

export const adminTicketService = {
    async getAllTickets() {
        return await adminTicketRepository.getAllTickets();
    },

    async getTicketById(id: string) {
        return await adminTicketRepository.getTicketById(id);
    },

    async updateTicketStatus(id: string, status: TicketStatus, assignedId: string) {
        const ticket = await adminTicketRepository.getTicketById(id);

        if (!ticket) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
        }

        return await adminTicketRepository.updateTicketStatus(id, status, assignedId);
    },

    async getTicketByStatus(status: TicketStatus) {
        return await adminTicketRepository.getTicketByStatus(status);
    },
}