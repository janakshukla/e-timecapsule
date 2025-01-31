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
   <div className="flex justify-center items-center bg-primary-300 h-screen">
     <Suspense fallback={<Loader />}>
     <div className="flex flex-col items-center justify-center h-3/2  bg-white p-8 rounded-lg shadow-lg">
        <img className="rounded-lg shadow-md" src={capsule.image} width={200} height={200} />
      
        <h1 className="text-3xl font-bold  mb-4 text-primary-300">{capsule.title}</h1>
        <p className="text-lg mb-4 text-gray-600">{capsule.description}</p>
        <p className="text-md mb-6 text-gray-500"><span className="text-primary-300 font-semibold" >OPEN DATE:</span> {JSON.stringify(Date(capsule.opendate))}</p>
        <p className="text-md mb-6 text-gray-500"><span className="text-primary-300 font-semibold" >CreatedAT:</span> {JSON.stringify(Date(capsule.createdAt))}</p>
        </div>
    </Suspense>
   </div>
  );
}