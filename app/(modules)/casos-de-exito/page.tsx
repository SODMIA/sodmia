import React from 'react';
import Image from 'next/image';

const successCases = [
  {
    clientName: 'Empresa ABC',
    industry: 'Manufacturera',
    challenge: 'Optimización de procesos de producción',
    solution: 'Implementación de un sistema de gestión de producción en tiempo real',
    result: 'Aumento del 30% en la eficiencia de producción',
    image: '/placeholder-success-1.jpg',
  },
  {
    clientName: 'Startup XYZ',
    industry: 'Tecnología',
    challenge: 'Escalabilidad de la infraestructura IT',
    solution: 'Migración a una arquitectura de microservicios en la nube',
    result: 'Reducción del 50% en costos de infraestructura y mejora en la velocidad de desarrollo',
    image: '/placeholder-success-2.jpg',
  },
  {
    clientName: 'Corporación 123',
    industry: 'Finanzas',
    challenge: 'Seguridad de datos y cumplimiento normativo',
    solution: 'Implementación de un sistema de gestión de seguridad de la información',
    result: 'Certificación ISO 27001 y cero incidentes de seguridad en el último año',
    image: '/placeholder-success-3.jpg',
  },
];

export default function CasosDeExitoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Casos de Éxito</h1>
      {successCases.map((caseStudy, index) => (
        <div key={index} className="mb-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={caseStudy.image}
                alt={caseStudy.clientName}
                width={300}
                height={200}
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {caseStudy.industry}
              </div>
              <h2 className="block mt-1 text-2xl leading-tight font-bold text-black">
                {caseStudy.clientName}
              </h2>
              <p className="mt-2 text-gray-600">
                <strong>Desafío:</strong> {caseStudy.challenge}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Solución:</strong> {caseStudy.solution}
              </p>
              <p className="mt-2 text-green-600 font-semibold">
                <strong>Resultado:</strong> {caseStudy.result}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}