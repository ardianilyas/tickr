import { trpc } from "@/lib/trpc/client";

export function useGetCategories() {
    return trpc.ticketRouter.getCategories.useQuery();
}