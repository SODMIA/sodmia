import Image from "next/image";
import React from "react";
import img1 from "@/public/img1.jpg";
 
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <section className="relative h-screen bg-black/40 backdrop-blur-xs">
      {/* Agregando la imagen como fondo */}
      <Image
        src={img1}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <div className="grid h-full max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="grid my-auto ml-auto place-self-center lg:col-span-7 text-white">
          <h1 className="max-w-2xl my-10 text-3xl font-extrabold tracking-tight leading-none xl:text-6xl">
            ¿Por qué elegirnos?
          </h1>
          <ul className="list-disc pl-4 space-y-5">
            <li>
              <span className="font-bold">Experiencia comprobada:</span>{" "}
              Contamos con un equipo de expertos con una amplia experiencia en
              el desarrollo de software.
            </li>
            <li>
              <span className="font-bold">Compromiso con el cliente:</span>{" "}
              Nos comprometemos a ofrecer un servicio personalizado y orientado a resultados.
            </li>
            <li>
              <span className="font-bold">Innovación y creatividad:</span>{" "}
              Nuestra capacidad para pensar de manera innovadora nos permite encontrar soluciones creativas a los desafíos tecnológicos.
            </li>
            <li>
              <span className="font-bold">Resultados probados:</span>{" "}
              Hemos demostrado nuestro éxito a través de la entrega de proyectos exitosos y clientes satisfechos.
            </li>
          </ul>
          {/*           
          <Link href="#services" className="mx-auto">
            <Button>¿Qué hacemos?</Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
