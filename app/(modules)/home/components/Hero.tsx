import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900  ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            SODMIA tech Solutions
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Impulsando la transformación de tus procesos, productos y servicios
            con soluciones innovadoras diseñadas a medida para potenciar el
            éxito de tu organización. Te acompañamos en tu proceso de
            digitalización
          </p>
          <Link href="#" className="mx-auto">
            <Button>¿Qué hacemos?</Button>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image width={500} height={500} src="" alt="mockup" />
        </div>
      </div>
    </section>
  );
}