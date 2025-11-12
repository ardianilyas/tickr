import { trpc } from "@/lib/trpc/client";
import { useGetCategories } from "./useGetCategories";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CreateTicketSchema, createTicketSchema } from "../schemas/ticketSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketPriority } from "@/lib/generated/prisma/enums";

export function useCreateTicket() {
    const utils = trpc.useUtils();
    const router = useRouter();

    const { data: categories } = useGetCategories();

    const { mutateAsync, isPending } = trpc.ticketRouter.createTicket.useMutation({
        onSuccess: () => {
            toast.success("Ticket created successfully");
            utils.ticketRouter.getTicketsByUserId.invalidate();
            router.push("/dashboard/tickets");
        }
    });

    const form = useForm<CreateTicketSchema>({
        resolver: zodResolver(createTicketSchema),
        defaultValues: { title: "", description: "", priority: TicketPriority.LOW, categoryId: "" }
    });

    const onSubmit = async (data: CreateTicketSchema) => {
        await mutateAsync(data);
    }

    return {
        form, 
        onSubmit,
        categories,
        isPending,
    };
}