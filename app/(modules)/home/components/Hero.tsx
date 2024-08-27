import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import bg1 from "@/public/bg1.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black/25 backdrop-blur-xs">
      <Image
        src={bg1}
        alt="Equipo de SODMIA trabajando en soluciones digitales"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <div className="flex flex-col  justify-center items-start h-full max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl pt-10 sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-4">
            Impulsa tu negocio con la <span className="text-red-500">transformación digital</span>
          </h1>
          <p className="mb-6 text-lg sm:text-xl lg:text-2xl">
            Desarrollamos soluciones tecnológicas a medida que optimizan tus procesos, 
            potencian tus productos y revolucionan tus servicios. Con SODMIA, 
            el éxito digital de tu organización está garantizado.
          </p>
          <Link href="#services">
            <Button size="sm" className="text-base sm:text-lg">
              Descubre cómo podemos ayudarte
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}