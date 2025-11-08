import z from "zod";

export const createCategorySchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
});

export const editCategorySchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
});

export const getCategorySchema = z.object({
    id: z.string(),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
export type EditCategorySchema = z.infer<typeof editCategorySchema>;
export type GetCategorySchema = z.infer<typeof getCategorySchema>;