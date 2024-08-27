import React from 'react';
import Image from 'next/image';
import img5 from "@/public/img5.jpg";
import { ContactForm } from './components/ContactForm';

export default function ContactPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen py-10 px-4 sm:px-6 lg:pt-20">
      <Image
        src={img5}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <div className="relative z-20  w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-white/80 p-3 lg:p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Contáctanos</h1>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">Carrera 7b 13-65 barrio colseguros, Colombia</p>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">sodmiatech@gmail.com</p>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-red-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">+57 302 338 3780</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 p-4 lg:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}