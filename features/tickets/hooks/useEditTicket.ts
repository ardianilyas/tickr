"use client";

import { useForm } from "react-hook-form";
import { editTicketSchema, EditTicketSchema } from "../schemas/ticketSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketPriority } from "@/lib/generated/prisma/enums";
import { trpc } from "@/lib/trpc/client";
import { useGetCategories } from "./useGetCategories";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useEditTicket(id: string) {
  const { data: categories } = useGetCategories();
  
  const utils = trpc.useUtils();
  const router = useRouter();

  const form = useForm<EditTicketSchema>({
    resolver: zodResolver(editTicketSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: TicketPriority.LOW,
      categoryId: "",
    },
  });

  const { mutateAsync, isPending } = trpc.ticketRouter.updateTicket.useMutation({
    onSuccess: () => {
      toast.success("Ticket updated successfully");
      utils.ticketRouter.getTicketById.invalidate({ id });
      utils.ticketRouter.getTicketsByUserId.invalidate();
      router.push("/dashboard/tickets");
    },
  });

  const onSubmit = async (data: EditTicketSchema) => {
    await mutateAsync({ id, ...data });
  };

  return {
    ...form,
    isPending,
    onSubmit,
    categories,
  };
}