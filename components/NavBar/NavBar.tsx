"use client"
import React, { useState } from "react";
import { CustomNavigationMenu, MobileNavigationMenu } from "./CustomNavigationMenu";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 p-4 flex justify-between items-center h-16" role="navigation" aria-label="Main">
      <Link
        href="/"
        aria-label="SODMIA - Inicio"
        className="flex items-center p-2 text-2xl font-bold"
      >
        SODMIA
      </Link>
 
      <div className="hidden lg:flex">
        <CustomNavigationMenu />
      </div>
      <Link href="/contact" className={`${buttonVariants()} hidden lg:inline-flex text-base`} aria-label="Contactar">
        Hablemos de tu proyecto
      </Link>

      <button 
        className="lg:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" aria-hidden="true">
          <div 
            id="mobile-menu"
            className="fixed right-0 top-0 h-full w-64 bg-white text-black p-4 transform transition-transform duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
          ><button 
              className="absolute top-4 right-4 text-2xl" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              ×
            </button>
            <div className="mt-14 flex flex-col space-y-4">
              <MobileNavigationMenu setIsMenuOpen={setIsMenuOpen} />
              <Link 
                href="/#contact" 
                className={`${buttonVariants()} w-full text-center text-base`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}