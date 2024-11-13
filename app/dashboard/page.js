import { prisma } from "@/prisma";
import Link from "next/link";

const Dashboard = async () => {
  // Directly fetch posts (capsules) data with Prisma
  const capsules = await prisma.capsule.findMany({
    where: {
      user: {
        email: 'janakshukla509@gmail.com',
      },
    },
  });

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Link href="/createcapsule">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Create Capsule
        </button>
      </Link>

      <div className="mt-4">
        {capsules.length > 0 ? (
          capsules.map((capsule) => (
            <div key={capsule.id} className="mb-4 p-4 bg-gray-800 rounded">
              <h2 className="text-xl font-semibold">{capsule.title}</h2>
              <p className="text-gray-300">{capsule.description}</p>
            </div>
          ))
        ) : (
          <p>No capsules found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
