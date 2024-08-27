"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  const pathname = usePathname();

  // Lista de rutas donde no queremos mostrar el FloatingCTA
  const excludedPaths = [, '/contact'];

  if (excludedPaths.includes(pathname)) {
    return null;
  }

  return (
    <div className="hidden lg:block fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      <Link href="/contact">
        <Button 
          size="lg" 
          className="shadow-lg bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Contacta ahora
        </Button>
      </Link>
    </div>
  );
}