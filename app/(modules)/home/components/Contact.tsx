import Image from "next/image";
import adviser from "@/public/icons/adviser.png";
import repair from "@/public/icons/repair.png";

export function Contact() {
  return (
    <>
      <div id="contact" className="h-5"></div>
      <section className="text-gray-800 py-16 px-4">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">¿Listo para dar el salto digital?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para convertir tus ideas en realidad. Nuestro equipo de expertos está 
            ansioso por escuchar sobre tu proyecto y ayudarte a alcanzar tus metas digitales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center p-6 border-b md:border-b-0 md:border-r border-gray-300">
            <Image src={adviser} width={80} height={80} alt="Icono de asesor especializado" className="mb-6" />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Habla con un Experto</h3>
              <p className="text-base sm:text-lg max-w-xs mx-auto">
                ¿Tienes una idea revolucionaria o un desafío tecnológico? Nuestros asesores 
                están listos para escucharte y ofrecerte soluciones personalizadas que 
                impulsarán tu negocio.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center p-6">
            <Image src={repair} width={80} height={80} alt="Icono de soporte técnico" className="mb-6" />
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Soporte Premium</h3>
              <p className="text-base sm:text-lg max-w-xs mx-auto">
                ¿Ya eres parte de la familia SODMIA? Accede a nuestro soporte exclusivo 
                y descubre cómo podemos ayudarte a sacar el máximo provecho de tu 
                inversión tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}