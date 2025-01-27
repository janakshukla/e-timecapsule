import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import {  scheduleJob } from "node-schedule";
import EmailTemplate from "@/components/Email-template";
import { Resend } from "resend";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("date");
  const email = formData.get("email");
  const image = formData.get("image");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const currentdate = new Date();

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const imageUrl = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "capsules",
            transformation: [{ width: 1000, height: 1000, crop: "limit" }],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.url);
            }
          }
        )
        .end(buffer);
    });

    // Save capsule data to the database
    const capsule = await prisma.capsule.create({
      data: {
        title,
        description,
        opendate: new Date(date),
        image: imageUrl,
        user: {
          connect: { email },
        },
      },
    });
    //shedule an capsule to the given date
    try {
      if (new Date(date) <= currentdate) {
        const { data, error } = await resend.emails.send({
          from: "Capsule@janak2004.tech",
          to: email,
          subject: "Congratulations! Your capsule is now open! 🎉",
          react: EmailTemplate({
            title: title,
            description: description,
            imageUrl: imageUrl,
            buttonUrl: "",
          }),
        });


        if (error) {
          return Response.json({ error }, { status: 500 });
        }
      }
      else {
        scheduleJob(new Date(date), async () => {
          //send email to the user
        try {
            const { data, error } = await resend.emails.send({
              from: "Capsule@janak2004.tech",
              to: email,
              subject: "Congratulations! Your capsule is now open! 🎉",
              react: EmailTemplate({
                title: title,
                description: description,
                imageUrl: imageUrl,
                buttonUrl: "",
              }),
            });
            console.log(data);
            if (error) {
              return Response.json({ error }, { status: 500 });
            }
        } catch (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
          
        }

        });
      }
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ message: "capsule is sceduled to open", capsule });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
