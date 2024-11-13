import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/index";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
  const user = await currentUser(req);
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  if (user) {
    try {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: user.primaryEmailAddress.emailAddress,
          username: user.username,
        },
      });
      if (!dbUser) {
        try {
          const dbuser = await prisma.user.create({
            data: {
              email: user.primaryEmailAddress.emailAddress,
              username: user.username,
              avatarUrl: user.profileImageUrl,
            },
          });
          return NextResponse.json(dbuser);
        } catch (error) {
          throw new Error("Error in syncuser route");
        }
      }
      return NextResponse.json({ messge: "db is in sync with user" });
    } catch (error) {
      throw new Error("Error in syncuser route");
    }
  }


}
