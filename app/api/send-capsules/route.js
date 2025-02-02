import EmailTemplate from "@/components/Email-template";
import { prisma } from "@/prisma/index";
import { NextResponse } from "next/server";
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req) {
    try {
        const now = new Date();
        const capsulestosend = await prisma.capsule.findMany({
            where: {
                opendate: {
                    lte: now
                },
                Emailsent: false
            }
        });

        for (const capsule of capsulestosend) {
            const user = await prisma.user.findUnique({
                where: {
                    id: capsule.userId
                }
            });

            try {
                const { data, error } = await resend.emails.send({
                    from: "Capsule@janak2004.tech",
                    to: user.email,
                    subject: "The time has come to open your capsule😍",
                    react: EmailTemplate({
                        title: capsule.title,
                        description: capsule.description,
                        imageUrl: capsule.imageUrl,
                        buttonUrl: `https://capsule.janak2004.tech/capsule/${capsule.id}`,
                        buttonText: "Open Capsule"
                    })
                });
                if (error) {
                    console.log(`error while sending the mail`, error);
                    return NextResponse.json({ message: "Error while sending the capsules" });
                } else {
                    await prisma.capsule.update({
                        where: {
                            id: capsule.id
                        },
                        data: {
                            Emailsent: true
                        }
                    });
                }
            } catch (error) {
                console.error(`error while sending the mail`, error);
                return NextResponse.json({ message: "Error while sending the capsules" });
            }
        }
        return NextResponse.json({ message: "Capsules sent successfully" });
    } catch (error) {
        console.error(`error while sending the mail`, error);
        return NextResponse.json({ message: "Error while sending the capsules" });
    }
}