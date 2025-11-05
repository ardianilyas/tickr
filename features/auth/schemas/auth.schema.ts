import z from "zod";

export const signUpSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    name: z.string().min(1, "Username is required"),
});

export const signInSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;