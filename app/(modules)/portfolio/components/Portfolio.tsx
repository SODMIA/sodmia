"use client"
import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Sistema de Gestión Empresarial',
    description: 'Desarrollo de un sistema integral para la gestión de recursos y procesos empresariales.',
    image: '/placeholder-project-1.jpg',
  },
  {
    title: 'Plataforma E-learning',
    description: 'Creación de una plataforma de aprendizaje en línea con funcionalidades avanzadas.',
    image: '/placeholder-project-2.jpg',
  },
  {
    title: 'App de Logística',
    description: 'Aplicación móvil para la optimización de rutas y gestión de envíos en tiempo real.',
    image: '/placeholder-project-3.jpg',
  },
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Nuestro Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}