import { CreateCategorySchema, EditCategorySchema } from "../schema/categories.schema";
import { adminCategoryRepository } from "../repositories/adminCategoryRepository";
import { TRPCError } from "@trpc/server";

export async function getAllCategories() {
    return await adminCategoryRepository.getAllCategories();
}

export async function createCategory(data: CreateCategorySchema) {
    return await adminCategoryRepository.createCategory(data);
}

export async function getCategory(id: string) {
    const category = await adminCategoryRepository.getCategory(id);

    if (!category) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Category not found",
        });
    };

    return category;
}

export async function updateCategory(data: EditCategorySchema & { id: string }) {
    return await adminCategoryRepository.updateCategory(data);
}