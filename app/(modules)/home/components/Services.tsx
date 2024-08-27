import React from "react";
import { servicesData } from "../servicesData";

export function Services() {
  return (
    <section id="services" className="bg-white text-gray-800 py-24 px-4">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Nuestras Soluciones Digitales</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          En SODMIA, transformamos desafíos en oportunidades digitales. Nuestros servicios 
          están diseñados para impulsar tu negocio hacia el futuro digital, optimizando 
          cada aspecto de tu operación.
        </p>
      </div>
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-base sm:text-lg text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}