/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { SignUpSchema } from "../schemas/auth.schema";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { TRPCError } from "@trpc/server";
import { useRouter } from "next/navigation";

export function useSignUp() {
    const router = useRouter();

    return useMutation({
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
}