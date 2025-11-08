
import { adminProcedure, router } from "@/server/trpc/trpc";
import { createCategorySchema, editCategorySchema, getCategorySchema } from "../schema/categories.schema";
import z from "zod";
import { createCategory, getAllCategories, getCategory, updateCategory } from "../services/adminCategoryService";

export const adminCategoriesRouter = router({
    getAllCategories: adminProcedure.query(async () => {
        return await getAllCategories();
    }),
    createCategory: adminProcedure.input(createCategorySchema).mutation(async ({ input }) => {
        return await createCategory(input);
    }),
    getCategory: adminProcedure.input(getCategorySchema).query(async ({ input }) => {
        return await getCategory(input.id);
    }),
    updateCategory: adminProcedure.input(editCategorySchema.extend({
        id: z.string(),
    })).mutation(async ({ input }) => {
        return await updateCategory(input)
    })
})