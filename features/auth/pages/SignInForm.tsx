'use client'

import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "../schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "../hooks/useSignIn";
import InputError from "@/components/InputError";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthTitle from "../components/AuthTitle";
import AuthSubtitle from "../components/AuthSubtitle";

export default function SignInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });

    const { mutate, isPending } = useSignIn();

    const onSubmit = (data: SignInSchema) => {
        mutate(data);
    }

    return (
        <div className="w-full">
            <AuthTitle>Access Your Reports Effortlessly</AuthTitle>
            <AuthSubtitle>Stay on top of every issue — log in to manage your tickets.</AuthSubtitle>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 w-full [&>div]:mb-3">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" {...register("email")} placeholder="team@tickr.com" className={errors.email ? "border-red-600" : ""} />
                    {errors.email && <InputError message={errors.email.message} />}
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" {...register("password")} placeholder="********" className={errors.password ? "border-red-600" : ""} />
                    {errors.password && <InputError message={errors.password.message} />}
                </div>
                <div>
                    <Button className="w-full inline-flex" disabled={isPending} type="submit">{ isPending ? "Signing in..." : "Sign In" }</Button>
                </div>
            </form>
            <p className="text-neutral-600 leading-relaxed">Don&apos;t have an account ? <Link href={"/sign-up"} className="text-blue-400 hover:text-blue-500 underline underline-offset-2">sign up here</Link> </p>
        </div>
    )
}