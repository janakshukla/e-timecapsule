"use client";
import React from "react";
import Link from "next/link";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="from-transparent  bg-gradient-to-b to-primary-300 p-4 shadow-md">
        <div className="container w-4/5 mx-auto flex justify-between items-center text-white">
          {/* Brand Name */}
          <Link
            href="/"
            className="md:text-3xl font-extrabold font-mono hover:text-blue-400"
          >
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
              {/* Links with Hamburger for mobile users */}
              <div className="sm:hidden">
                <button
                  className="text-white focus:outline-none"
                  aria-label="Open Menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
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
      <div>
        {isOpen && (
          <div className="  text-white p-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400"
            >
              Dashboard
            </Link>
            <Link
              href="/alluser"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-blue-400"
            >
              All Users
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
