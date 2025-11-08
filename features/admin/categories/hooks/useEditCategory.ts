import { useForm } from "react-hook-form";
import { editCategorySchema, EditCategorySchema } from "../schema/categories.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/lib/trpc/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function useEditCategory(id: string, defaultValues?: EditCategorySchema) {
    const form = useForm<EditCategorySchema>({
        resolver: zodResolver(editCategorySchema),
        defaultValues,
    });

    const utils = trpc.useUtils();
    const router = useRouter();

    const { mutateAsync, isPending } = trpc.adminCategoriesRouter.updateCategory.useMutation({
        onSuccess: () => {
            toast.success("Category updated successfully");
            utils.adminCategoriesRouter.getAllCategories.invalidate();
            router.push("/dashboard/admin/categories");
        }
    });

    const onSubmit = async (data: EditCategorySchema) => {
        await mutateAsync({...data, id});
    }

    return {
        ...form,
        isPending,
        onSubmit
    }
}