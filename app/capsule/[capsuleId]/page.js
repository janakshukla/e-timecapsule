import Loader from "@/components/Loader";
import { prisma } from "@/prisma/index";
import { redirect } from "next/navigation";


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
        <div className="flex flex-col items-center justify-center  backdrop-blur-lg shadow-slate-800   bg-primary-300/50 p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-between w-full mb-4">
            <h1 className="text-3xl font-bold mb-4 text-secondry-300">{capsule.title}</h1>
            <form
              action={async () => {
                "use server";
                await prisma.capsule.delete({
                  where: {
                    id: capsule.id,
                  },
                });
                redirect("/dashboard");
              }}

            >
              <button className="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          </div>
          <img className="rounded-lg shadow-md" src={capsule.image} width={200} height={200} />

          <p className="text-lg mb-4 text-gray-600">{capsule.description}</p>
          <p className="text-md mb-6 text-gray-500"><span className="text-secondry-300 font-semibold" >OPEN DATE:</span> {JSON.stringify(Date(capsule.opendate))}</p>
          <p className="text-md mb-6 text-gray-500"><span className="text-secondry-300 font-semibold" >CreatedAT:</span> {JSON.stringify(Date(capsule.createdAt))}</p>
        </div>
      </Suspense>
    </div>
  );
}