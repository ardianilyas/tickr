import { prisma } from "@/lib/db/prisma";
import { CreateCategorySchema, EditCategorySchema } from "../schema/categories.schema";

export async function getAllCategories() {
    return await prisma.category.findMany({ orderBy: { createdAt: "desc" } });
}

export async function createCategory(data: CreateCategorySchema) {
    return await prisma.category.create({
        data,
    });
}

export async function getCategory(id: string) {
    return await prisma.category.findUnique({
        where: { id },
    });
}

export async function updateCategory(data: EditCategorySchema & { id: string }) {
    return await prisma.category.update({ 
        data: {
            name: data.name,
            description: data.description
        },
        where: { id: data.id },
    })
}