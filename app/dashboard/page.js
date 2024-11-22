"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [capsules, setcapsules] = useState([])

  useEffect(() => {
    const getcapsules = async () => {
      const response = await fetch('/api/capsules').then((res) => res.json()).catch((error) => console.error(error));
      setcapsules(response);
      console.log(response)

    }
    getcapsules()

  }, [])



  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Link href="/createcapsule">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Create Capsule
        </button>
      </Link>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {capsules.length > 0 ? (
    capsules.map((capsule) => (
      <div
        key={capsule.id}
        className="p-4 bg-gray-800 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        {/* Image */}
        <img
          src={capsule.image}
          alt={capsule.title}
          className="w-full h-48 object-cover rounded-t"
        />

        {/* Title */}
        <h2 className="text-xl font-semibold mt-4 text-white">
          {capsule.title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-2">{capsule.description}</p>

        {/* Open Date */}
        <p className="mt-4 text-sm text-gray-400">
          <span className="font-bold text-gray-200">Open Date:</span>{" "}
         {new Date(capsule.updatedAt).toLocaleDateString()}
        </p>
      </div>
    ))
  ) : (
    <p className="text-gray-400 text-center col-span-full">
      No capsules found.
    </p>
  )}
</div>

    </div>
  );
};


