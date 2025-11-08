import { trpc } from "@/lib/trpc/client";

export function useGetAllCategory() {
    return trpc.adminCategoriesRouter.getAllCategories.useQuery();
}