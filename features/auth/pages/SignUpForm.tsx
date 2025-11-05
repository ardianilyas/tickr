'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpSchema } from '../schemas/auth.schema';
import { useForm } from 'react-hook-form';
import { useSignUp } from '../hooks/useSignUp';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import InputError from '@/components/InputError';
import Link from 'next/link';
import AuthTitle from '../components/AuthTitle';
import AuthSubtitle from '../components/AuthSubtitle';

export default function SignUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const { mutate, isPending } = useSignUp()

    const onSubmit = (data: SignUpSchema) => {
        mutate(data);
    }

    return (
        <div>
            <AuthTitle>Join the Ticketing System</AuthTitle>
            <AuthSubtitle>Report, track, and collaborate — all from one dashboard.</AuthSubtitle>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 w-full [&>div]:mb-3">
                <div>
                    <Label htmlFor="name">Username</Label>
                    <Input type="text" {...register("name")} placeholder='Tickr Team' className={errors.name ? "border-red-600" : ""} />
                    {errors.name && <InputError message={errors.name.message} />}
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" {...register("email")} placeholder='team@tickr.com' className={errors.email ? "border-red-600" : ""} />
                    {errors.email && <InputError message={errors.email.message} />}
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" {...register("password")} placeholder='********' className={errors.password ? "border-red-600" : ""} />
                    {errors.password && <InputError message={errors.password.message} />}
                </div>
                <div>
                    <Button className="w-full inline-flex" disabled={isPending} type="submit">Sign Up</Button>
                </div>
            </form>
            <p className="text-neutral-600 leading-relaxed">Already have an account ? <Link href={"/sign-in"} className="text-blue-400 hover:text-blue-500 underline underline-offset-2">sign in here</Link> </p>
        </div>
    )
}