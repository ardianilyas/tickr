import { TicketStatus } from "@/lib/generated/prisma/enums";
import { adminTicketRepository } from "../repositories/adminTicketRepository"

export const adminTicketService = {
    async getAllTickets() {
        return await adminTicketRepository.getAllTickets();
    },

    async getTicketById(id: string) {
        return await adminTicketRepository.getTicketById(id);
    },

    async updateTicketStatus(id: string, status: TicketStatus) {
        return await adminTicketRepository.updateTicketStatus(id, status);
    },

    async getTicketByStatus(status: TicketStatus) {
        return await adminTicketRepository.getTicketByStatus(status);
    },
}