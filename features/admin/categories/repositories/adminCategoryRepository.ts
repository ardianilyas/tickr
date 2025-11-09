import { prisma } from "@/lib/db/prisma";
import { CreateCategorySchema } from "../schema/categories.schema";

export const adminCategoryRepository = {
    async getAllCategories() {
        return await prisma.category.findMany({
            orderBy: { name: "asc" },
        });
    },

    async createCategory(data: CreateCategorySchema) {
        return await prisma.category.create({
            data,
        });
    },

    async getCategory(id: string) {
        return await prisma.category.findUnique({
            where: { id },
        });
    },

    async updateCategory(data: CreateCategorySchema & { id: string }) {
        return await prisma.category.update({ 
            data: {
                name: data.name,
                description: data.description
            },
            where: { id: data.id },
        })
    },
}