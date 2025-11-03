import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";
import { ZodError } from "zod";

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            message: error.message,
            zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
        };
    },
});

export const router = t.router;
export const publicProcedure = t.procedure;