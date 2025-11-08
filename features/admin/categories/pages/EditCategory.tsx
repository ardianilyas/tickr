'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc/client"
import useEditCategory from "../hooks/useEditCategory";
import { useEffect } from "react";
import InputError from "@/components/InputError";

export default function EditCategory({ id }: { id: string }) {
    const { data: category, isLoading } = trpc.adminCategoriesRouter.getCategory.useQuery({ id });

    const { register, formState: { errors }, handleSubmit, onSubmit, isPending, reset } = useEditCategory(id, undefined);

    useEffect(() => {
        if (category) {
          reset({
            name: category.name,
            description: category.description ?? "",
          });
        }
    }, [category, reset]);
    
    return (
        <div className="mt-6 max-w-xl">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 [&>div]:grid [&>div]:gap-1">
                            <div>
                                <Label>Title</Label>
                                <Input {...register("name")} placeholder="Tickr" />
                                {errors.name && <InputError message={errors.name.message} />}
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Textarea {...register("description")} placeholder="Lorem ipsum"></Textarea>
                                {errors.description && <InputError message={errors.description.message} />}
                            </div>
                            <div>
                                <Button disabled={isPending} type="submit">
                                    { isPending ? "Updating..." : "Update" }
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}