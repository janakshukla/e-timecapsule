"use client"
import Loader from "@/components/Loader";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [capsules, setcapsules] = useState([])
  const [isloaded, setisloaded] = useState(false)

  useEffect(() => {
    const getcapsules = async () => {
      const response = await fetch('/api/capsules').then((res) => res.json()).catch((error) => console.error(error));
      setcapsules(response);
      setisloaded(true)

    }
    getcapsules()

  }, [])



  return (
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
                <Image
                  src={capsule.image}
                  alt={capsule.title}
                  width={400}
                  height={300}
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
                  {/* {new Date(capsule.updatedAt).toLocaleDateString()} */}
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "long"
          
                  }).format(new Date(capsule.updatedAt))}
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
  );
};


