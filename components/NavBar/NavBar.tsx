import React from "react";
import { CustomNavigationMenu } from "./CustomNavigationMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 container flex justify-between h-14 mx-auto dark:bg-gray-100 dark:text-gray-800">
      <Link
        rel="noopener noreferrer"
        href="/"
        aria-label="Back to homepage"
        className="flex items-center p-2"
      >
        SODMIA
      </Link>
      <CustomNavigationMenu />

      <button className="self-center px-8 py-3 rounded">Contacto</button>
    </nav>
  );
}
