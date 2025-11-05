import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db/prisma";
import { customSession } from "better-auth/plugins";
import { getUserRole } from "@/utils/get-role";

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
                required: false
            },
        },
    },

    plugins: [
        customSession(async({ user, session }) => {
            const role = await getUserRole(user.id);
            return {
                ...session,
                user: {
                    ...user,
                    role
                }
            }
        })
    ]
});