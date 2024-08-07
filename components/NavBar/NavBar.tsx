import React from "react";
import { CustomNavigationMenu } from "./CustomNavigationMenu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 p-4  flex justify-between items-center h-14">
      <Link
        rel="noopener noreferrer"
        href="/"
        aria-label="Back to homepage"
        className="flex items-center p-2 text-3xl"
      >
        SODMIA
      </Link>
      <div className="hidden lg:flex">
        <CustomNavigationMenu />
      </div>
      <Link href="/#contact" className={buttonVariants()}>
        Contacto
      </Link>

      <button className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
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
