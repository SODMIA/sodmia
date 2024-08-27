"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: string; error?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitResult({ success: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto." });
        setFormState({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      setSubmitResult({ error: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Empresa"
            className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Mensaje"
            rows={4}
            className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out"
            required
          ></textarea>
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </form>
      {submitResult && (
        <div className={`mt-4 p-4 rounded ${submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitResult.success || submitResult.error}
        </div>
      )}
    </div>
  );
}