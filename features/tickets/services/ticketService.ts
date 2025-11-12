import { ticketRepository } from "../repositories/ticketRepository"
import { CreateTicketSchema } from "../schemas/ticketSchema";

export const ticketService = {
    async getTicketByUserId (userId: string) {
        return await ticketRepository.getTicketsByUserId(userId);
    },

    async getCategories() {
        return await ticketRepository.getcategories();
    },

    async createTicket(userId: string, data: CreateTicketSchema) {
        return await ticketRepository.createTicket(userId, data);
    }
}