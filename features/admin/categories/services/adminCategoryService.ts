import { CreateCategorySchema, EditCategorySchema } from "../schema/categories.schema";
import { adminCategoryRepository } from "../repositories/adminCategoryRepository";

export async function getAllCategories() {
    return await adminCategoryRepository.getAllCategories();
}

export async function createCategory(data: CreateCategorySchema) {
    return await adminCategoryRepository.createCategory(data);
}

export async function getCategory(id: string) {
    return await adminCategoryRepository.getCategory(id);
}

export async function updateCategory(data: EditCategorySchema & { id: string }) {
    return await adminCategoryRepository.updateCategory(data);
}