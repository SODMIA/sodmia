import React from "react";
import { CustomNavigationMenu } from "./CustomNavigationMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 container flex justify-between h-14 mx-auto  bg-white">
      <Link
        rel="noopener noreferrer"
        href="/"
        aria-label="Back to homepage"
        className="flex items-center p-2"
      >
        SODMIA
      </Link>
      <div className="hidden lg:flex">
        <CustomNavigationMenu />
      </div>

      <button className="self-center px-8 py-3 rounded hidden lg:block">
        Contacto
      </button>
      <button className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 dark:text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
}
