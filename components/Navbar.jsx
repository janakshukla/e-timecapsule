import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="from-transparent bg-gradient-to-b to-primary-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Brand Name */}
        <Link href="/" className="md:text-3xl font-extrabold font-mono hover:text-blue-400">
          E-TimeCapsule
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <SignedIn>
            {/* Links for Signed-In Users */}
            <div className="hidden sm:flex space-x-4">
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
              <Link href="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
              <Link href="/alluser" className="hover:text-blue-400">
                All Users
              </Link>
            </div>
            <UserButton />
          </SignedIn>

          <SignedOut>
            {/* Buttons for Signed-Out Users */}
            <div className="flex space-x-4">
              <Link href="/sign-up">
                <button
                  className="bg-primary-300 hover:bg-blue-600 text-secondry-100 text-xs md:text-base py-2 px-4 rounded transition duration-300"
                  aria-label="Sign Up"
                >
                  Sign Up
                </button>
              </Link>
              <Link href="/sign-in">
                <button
                  className=" bg-primary-300  hover:bg-blue-600 text-xs text-secondry-100 md:text-base py-2 px-4 rounded transition duration-300"
                  aria-label="Log In"
                >
                  Log In
                </button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
