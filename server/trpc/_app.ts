import { adminCategoriesRouter } from "@/features/admin/categories/routers/adminCategoriesRouter";
import { router } from "./trpc";
import { adminTicketRouter } from "@/features/admin/tickets/routers/adminTicketRouter";

export const appRouter = router({
    adminCategoriesRouter,
    adminTicketRouter,
});

export type AppRouter = typeof appRouter;