import { ticketRepository } from "../repositories/ticketRepository"
import { CreateTicketSchema, EditTicketSchema } from "../schemas/ticketSchema";

export const ticketService = {
    async getTicketByUserId (userId: string) {
        return await ticketRepository.getTicketsByUserId(userId);
    },

    async getTicketById(id: string) {
        return await ticketRepository.getTicketById(id);
    },

    async getCategories() {
        return await ticketRepository.getcategories();
    },

    async createTicket(userId: string, data: CreateTicketSchema) {
        return await ticketRepository.createTicket(userId, data);
    },

    async updateTicket(id: string, data: EditTicketSchema) {
        return await ticketRepository.updateTicket(id, data);
    }
}