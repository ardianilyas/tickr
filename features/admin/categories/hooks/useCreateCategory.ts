import { trpc } from "@/lib/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CreateCategorySchema, createCategorySchema } from "../schema/categories.schema";
import { toast } from "sonner";

export default function useCreateCategory() {
    const utils = trpc.useUtils();
    const router = useRouter();

    const form = useForm<CreateCategorySchema>({
        resolver: zodResolver(createCategorySchema),
    });

    const { mutateAsync, isPending } = trpc.adminCategoriesRouter.createCategory.useMutation({
        onSuccess: () => {
            toast.success("Category created successfully");
            utils.adminCategoriesRouter.getAllCategories.invalidate();
            router.push("/dashboard/admin/categories");
        }
    });

    const onSubmit = async (data: CreateCategorySchema) => {
        await mutateAsync(data);
    }

    return {
        ...form,
        isPending,
        onSubmit
    }
}