import Image from "next/image";
import React from "react";
import adviser from "@/public/icons/adviser.png";
import repair from "@/public/icons/repair.png";

export function Contact() {
  return (
    <>
      <div id="contact" className="h-5"></div>
      <section className="grid grid-cols-12 text-gray-800 my-20">
        <button className="col-span-6 p-5 text-left flex justify-center items-center mb-6 space-x-7 border-r-4 hover:bg-gray-200 hover:text-red-700 border-gray-600">
          <Image src={adviser} width={100} height={100} alt="" />
          <div className="flex flex-col space-y-4 m-auto max-w-xs">
            <div>
              <h2 className="text-2xl font-semibold">
                Contacte un especialista
              </h2>
            </div>
            <div className="space-y-1">
              <p>
                ¿Necesitas asesoramiento experto? ¡Contáctanos! Nuestros
                especialistas están listos para brindarte la ayuda y orientación
                que necesitas en tu situación específica.
              </p>
            </div>
          </div>
        </button>

        <button className="col-span-6 p-5 text-left flex justify-center items-center mb-6 space-x-7 hover:bg-gray-200  hover:text-red-700 border-gray-600">
          <Image src={repair} width={100} height={100} alt="" />

          <div className="flex flex-col space-y-4 max-w-xs">
            <div>
              <h2 className="text-2xl font-semibold">
                Soporte exclusivo para clientes
              </h2>
            </div>
            <div className="space-y-1">
              <p>
                ¿Necesitas asesoramiento experto? ¡Contáctanos! Nuestros
                especialistas están listos para brindarte la ayuda y orientación
                que necesitas en tu situación específica.
              </p>
            </div>
          </div>
        </button>
      </section>
    </>
  );
}
