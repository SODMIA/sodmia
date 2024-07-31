import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import bg1 from "@/public/bg1.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen bg-black/25 backdrop-blur-xs">
      <Image
        src={bg1}
        alt="Background Image"
        sizes="contain"
     
        objectFit="cover"
        className="absolute inset-0 z-[-1] "
      />
      <div className="grid h-full max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="grid my-auto mr-auto place-self-center lg:col-span-7 lg:pt-12 text-white">
          <h1 className="max-w-2xl my-4 text-3xl font-extrabold tracking-tight leading-none xl:text-6xl">
            Te acompañamos en tu proceso de{" "}
            <span className="underline">digitalización</span>
          </h1>
          <p className="max-w-2xl my-6 font-light  lg:mb-8 md:text-lg lg:text-xl">
            Impulsando la transformación de tus procesos, productos y servicios
            con soluciones innovadoras diseñadas a medida para potenciar el
            éxito de tu organización.
          </p>
          <Link href="#services" className="mx-auto text-lg">
            <Button>¿Qué hacemos?</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
