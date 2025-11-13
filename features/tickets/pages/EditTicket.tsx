'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";
import { TicketPriority } from "@/lib/generated/prisma/enums";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputError from "@/components/InputError";
import { Button } from "@/components/ui/button";
import { useEditTicket } from "../hooks/useEditTicket";
import { useEffect } from "react";
import { useGetTicketById } from "../hooks/useGetTicketById";

export default function UpdateTicket({ id }: { id: string }) {
    const { categories, register, handleSubmit, control, formState: { errors }, onSubmit, isPending, reset } = useEditTicket(id);

    const { data: ticket } = useGetTicketById(id);

    useEffect(() => {        
        if(ticket) {
            reset({
                title: ticket.title || "",
                description: ticket.description || "",
                priority: ticket.priority || TicketPriority.LOW,
                categoryId: ticket.categoryId || "",
            })
        }
    }, [ticket, reset]);

    return (
        <div className="mt-6 max-w-2xl">
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 [&>div]:grid [&>div]:gap-1">
                        <div>
                            <Label>Title</Label>
                            <Input placeholder="Ticket title" {...register("title")}/>
                            <InputError message={errors.title?.message} />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Textarea placeholder="Ticket description" {...register("description")}></Textarea>
                            <InputError message={errors.description?.message} />
                        </div>
                        <div>
                            <Label>Priority</Label>
                            <Controller 
                                name="priority"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a priority" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(TicketPriority).map((priority) => (
                                                <SelectItem key={priority} value={priority}>{priority}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <InputError message={errors.priority?.message} />
                        </div>
                        <div>
                            <Label>Category</Label>
                            <Controller 
                                name="categoryId"
                                control={control}
                                render={({ field }) => (
                                    <Select 
                                        onValueChange={(value) => field.onChange(value)}
                                        value={field.value || undefined}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories && categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <InputError message={errors.categoryId?.message} />
                        </div>
                        <div>
                            <Button disabled={isPending}>
                                {isPending ? "Updating..." : "Update"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}