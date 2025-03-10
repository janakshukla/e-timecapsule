import { prisma } from "@/prisma/index";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function GET(req) {
    const user = await currentUser(req);

    if (!user) {
        return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
           
    }
    const capsules = await prisma.capsule.findMany({
        where: {
            user: {
                email: user.primaryEmailAddress.emailAddress

            }
        },
        orderBy: {
            createdAt: "desc",
        },


    });
    return NextResponse.json(capsules);
}
