import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },

    session: {
        expiresIn: 60 * 60 * 24 * 3,
        disableSessionRefresh: true,
    },
    
    user: {
        additionalFields: {
            role: {
                type: "string",
                input: false,
                required: true
            },
        },
    },
});