import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


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



    return NextResponse.json({ message: "Capsule is created!!", capsule });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}