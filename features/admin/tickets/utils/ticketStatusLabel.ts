import type { TicketStatus } from "@/lib/generated/prisma/enums"; 

export const ticketStatusLabels: Record<TicketStatus, string> = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
};