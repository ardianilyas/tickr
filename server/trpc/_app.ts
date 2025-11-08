import { adminCategoriesRouter } from "@/features/admin/categories/routers/adminCategoriesRouter";
import { router } from "./trpc";

export const appRouter = router({
    adminCategoriesRouter
});

export type AppRouter = typeof appRouter;