import React from "react";
import { servicesData } from "../servicesData";

export function Services() {
  return (
    <section id="services" className="h-screnn bg-white text-gray-800">
      <div className="container mx-auto p-4 my-8 space-y-2 text-center">
        <h2 className="text-4xl font-bold">Nuestros Servicios</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            {service.icon}
            <h3 className="my-3 text-2xl font-semibold">{service.title}</h3>
            <div className="space-y-1 leading-tight text-center">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
