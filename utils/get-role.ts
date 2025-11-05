import { prisma } from "@/lib/db/prisma"

export const getUserRole = async (id: string) => {
    const user =  await prisma.user.findUnique({
        where: { id },
        select: { Role: true }
    });

    return user?.Role ?? null;
}