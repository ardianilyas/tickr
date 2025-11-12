import { adminCategoriesRouter } from "@/features/admin/categories/routers/adminCategoriesRouter";
import { router } from "./trpc";
import { adminTicketRouter } from "@/features/admin/tickets/routers/adminTicketRouter";
import { ticketRouter } from "@/features/tickets/routers/ticketRouter";

export const appRouter = router({
    adminCategoriesRouter,
    adminTicketRouter,
    ticketRouter,
});

export type AppRouter = typeof appRouter;