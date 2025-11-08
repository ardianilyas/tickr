import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";
import z, { ZodError } from "zod";
import { Role } from "@/lib/generated/prisma/enums";

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            message: error.message,
            zodError: error.cause instanceof ZodError ? z.treeifyError(error.cause) : null,
        };
    },
});

const isAuthed = t.middleware(({ ctx, next }) => {
    if(!ctx.session || !ctx.session.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
        ctx: {
            user: ctx.session.user,
        },
    });
});

const isAdmin = t.middleware(({ ctx, next }) => {
    if(ctx.session?.user.role !== Role.ADMIN) {
        throw new TRPCError({ code: "FORBIDDEN", message: "You do not have permission to access this resource." });
    }

    return next({
        ctx: {
            user: ctx.session.user,
        },
    });
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const authProcedure = t.procedure.use(isAuthed);
export const adminProcedure = authProcedure.use(isAdmin);