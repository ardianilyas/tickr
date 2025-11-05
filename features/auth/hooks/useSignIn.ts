/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { SignInSchema } from "../schemas/auth.schema";
import { getSession, signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUserStore } from "../stores/useUserStore";
import { TRPCError } from "@trpc/server";

export function useSignIn() {
    const router = useRouter();
    const setUser = useUserStore((state) => state.setUser);

    return useMutation({
        mutationFn: (data: SignInSchema) => signIn.email(data),
        onSuccess: async (res) => {
            if (!res.error) {
                const session = await getSession();

                if (session.data?.user) {
                    setUser(session.data.user);
                }

                toast.success("Signed in successfully");
                
                router.push("/");
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