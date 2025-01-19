import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma/index";
import { NextResponse } from "next/server";


export default async function syncuser() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.redirect(new URL('/sign-in', process.env.NEXT_PUBLIC_BASE_URL));
  }

  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        email: user.primaryEmailAddress.emailAddress,
      },
    });

    if (!dbUser) {
      const dbuser = await prisma.user.create({
        data: {
          email: user.primaryEmailAddress.emailAddress,
          username: user.username,
          avatarUrl: user.profileImageUrl,
        },
      });
      return NextResponse.json(dbuser);
    }

    return NextResponse.json(dbUser);
  } catch (error) {
    throw new Error("Error in syncuser route: " + error.message);
  }
}