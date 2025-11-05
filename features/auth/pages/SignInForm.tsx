'use client'

import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "../schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "../hooks/useSignIn";

export default function SignInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });

    const { mutate, isPending } = useSignIn();

    const onSubmit = (data: SignInSchema) => {
        mutate(data);
    }

    return (
        <div>
            <h1>Sign In Form</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <button disabled={isPending} type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}