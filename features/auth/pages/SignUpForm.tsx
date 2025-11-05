'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpSchema } from '../schemas/auth.schema';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/lib/auth-client';
import { toast } from 'sonner';
import { TRPCError } from '@trpc/server';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const mutation = useMutation({
        mutationFn: (data: SignUpSchema) => signUp.email(data),
        onSuccess: (res) => {
            if (!res.error) {
                toast.success("Signed up successfully, please signin to continue.");
                router.push("/sign-in");
            } else {
                toast.error(res.error.message)
            }
        },
        onError: (error: any) => {
            if (error instanceof TRPCError) {
                toast.error(error.message)
            } else {
                toast.error("Error signing in.")
            }
        },
    });

    const onSubmit = (data: SignUpSchema) => {
        mutation.mutate(data);
    }

    return (
        <div>
            <h1>Sign Up Form</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input type="text" {...register("name")} />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register("email")} />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")} />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}