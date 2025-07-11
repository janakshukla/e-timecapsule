import { prisma } from "@/prisma";
import Link from "next/link";




export default async function Page() {

    async function getcapsules() {
        try {
            return await prisma.capsule.findMany();

        } catch (error) {
            console.log(error);
        }
    }
    const capsules = await getcapsules();
    const isloaded = capsules.length > 0;

    return (
        <>
            <div className=" min-h-screen bg-primary-300 text-secondry-100 ">


                <div className="mt-4 grid grid-cols-1  object-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isloaded ? (
                        capsules.length === 0 ? (
                            <div className="w-full col-span-3 flex justify-center items-center">
                                <p className="text-secondry-300">No Capsules Found</p>
                            </div>
                        ) : (
                            capsules.map((capsule) => (
                                <Link href={`/capsule/${capsule.id}`}
                                    key={capsule.id}
                                    className="p-4 bg-gray-800 rounded shadow-lg content-center hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Image */}
                                    <img
                                        src={capsule.image}
                                        alt={capsule.title}
                                        className="w-full h-48 object-cover rounded-t"
                                    />

                                    {/* Title */}
                                    <h2 className="text-xl font-semibold mt-4 text-secondry-100">
                                        {capsule.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-300 mt-2">{capsule.description}</p>

                                    {/* Open Date */}
                                    <p className="mt-4 text-sm text-gray-400">
                                        <span className="font-bold text-gray-200">updatedAt:</span>{" "}
                                        {new Date(capsule.updatedAt).toLocaleDateString()}
                                    </p>
                                </Link>)
                            ))
                    ) : (
                        <div className="w-full col-span-3 flex justify-center items-center ">
                            <Loader />

                        </div>
                    )}
                </div>

            </div>
        </>
    )
}