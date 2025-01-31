import Loader from "@/components/Loader";
import { prisma } from "@/prisma/index";

import { Suspense } from "react";


export default async function capsules({ params }) {
  const { capsuleId } = await params;
  let capsule;
  try {
    capsule = await prisma.capsule.findUnique({
      where: {
        id: capsuleId,
      },
    });
  } catch (error) {
    throw new Error("Capsule not found");
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{capsule.title}</h1>
        <p className="text-lg mb-4 text-gray-600">{capsule.description}</p>
        <p className="text-md mb-6 text-gray-500">{JSON.stringify(capsule.opendate)}</p>
        <img className="rounded-lg shadow-md" src={capsule.image} width={200} height={200} />
      </div>
    </Suspense>
  );
}