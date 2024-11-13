"use client";
import React from "react";
import Link from "next/link";
import { SignedIn, useAuth, UserButton} from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex justify-between max-w-screen mt-2 ml-5 mr-5 text-white ">
      <h1 className="text-4xl font-extrabold font-mono ">E-TimeCapsule</h1>
      {isSignedIn && (
        <div className="flex justify-between w-1/2 text-xl font-semibold  text-center">
          {/* all home routes */}
          <Link href="/">Home</Link>
          <Link href="/dashboard">DashBoard</Link>
          <Link href="alluser">All Users</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}

      {/* all clerk related buttons */}
      {!isSignedIn && (
        <div className="justify-between flex w-1/4 " >
          <Link href="/sign-up">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4 "  >SignUp</button>
          </Link>
          <Link href="/sign-in">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4 " >Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
