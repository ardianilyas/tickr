/* eslint-disable @typescript-eslint/no-explicit-any */
import { ticketRepository } from "../repositories/ticketRepository"
import { CreateTicketSchema, EditTicketSchema } from "../schemas/ticketSchema";
import { TRPCError } from "@trpc/server";

export const ticketService = {
    async getTicketByUserId (userId: string) {
        return await ticketRepository.getTicketsByUserId(userId);
    },

    async getTicketById(id: string) {
        const ticket = await ticketRepository.getTicketById(id);
        if (!ticket) throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
        return ticket;
    },

    async getCategories() {
        return await ticketRepository.getcategories();
    },

    async createTicket(userId: string, data: CreateTicketSchema) {
        return await ticketRepository.createTicket(userId, data);
    },

    async updateTicket(id: string, data: EditTicketSchema) {
        try {
            await ticketRepository.updateTicket(id, data);
        } catch (error: any) {
            if (error.code === "P2025") throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
            throw error;
        }
    },

    async deleteTicketById(id: string) {
        try {
            await ticketRepository.deleteTicketById(id);
        } catch (error: any) {
            if (error.code === "P2025") throw new TRPCError({ code: "NOT_FOUND", message: "Ticket not found" });
            throw error;
        }
    }
}