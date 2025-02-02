import Link from "next/link";



export default function Home() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary-300
    text-secondry-100 py-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to E-Time Capsule</h1>
        <p className="text-lg">
          Capture and preserve your special moments for the future.
        </p>
        <Link href="/dashboard"> <button  className="px-6 mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
          Get Started
        </button>
        </Link>
      </section>
    </div>
  );
}
