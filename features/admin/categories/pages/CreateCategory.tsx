"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import InputError from "@/components/InputError";
import useCreateCategory from "../hooks/useCreateCategory";

export default function CreateCategory() {
    const { register, handleSubmit, onSubmit, formState: { errors }, isPending } = useCreateCategory();

    return (
        <div className="mt-6 max-w-xl">
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 [&>div]:grid [&>div]:gap-1">
                        <div>
                            <Label>Name</Label>
                            <Input {...register("name")} type="text" placeholder="Tickr" className={errors.name ? "border-red-500" : ""} />
                            {errors.name && <InputError message={errors.name.message} />}
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Textarea {...register("description")} className={errors.description ? "border-red-500" : ""} placeholder="Lorem ipsum"></Textarea>
                            {errors.description && <InputError message={errors.description.message} />}
                        </div>
                        <div className="inline-flex">
                            <Button disabled={isPending} type="submit">
                                { isPending ? "Creating..." : "Create" }
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}