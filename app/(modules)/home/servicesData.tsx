import Image from "next/image";
import pantone from "@/public/icons/pantone.png";
import optimization from "@/public/icons/optimization.png";
import consultingColor from "@/public/icons/consultingColor.png";
import systemIntegration from "@/public/icons/systemIntegration.png";
import encrypted from "@/public/icons/encrypted.png";
import wrench from "@/public/icons/wrench.png";

export const servicesData = [
  {
    title: "Desarrollo a Medida",
    description: "Creamos software personalizado que se adapta perfectamente a tu negocio, automatizando procesos y mejorando la eficiencia operativa.",
    icon: (
      <Image width={40} height={40} src={pantone} alt="Desarrollo a medida" />
    ),
  },
  {
    title: "Optimización de Procesos",
    description: "Analizamos y mejoramos tus flujos de trabajo con soluciones tecnológicas que aumentan la productividad y reducen costos.",
    icon: (
      <Image
        width={40}
        height={40}
        src={optimization}
        alt="Desarrollo a medida"
      />
    ),
  },
  {
    title: "Consultoría Estratégica",
    description: "Te guiamos en tu viaje de transformación digital con asesoramiento experto, ayudándote a tomar decisiones informadas y estratégicas.",
   icon: (
      <Image
        width={40}
        height={40}
        src={consultingColor}
        alt="Desarrollo a medida"
      />
    ),
  },
  {
    title: "Integración de Sistemas",
    description: "Conectamos tus sistemas existentes para crear un ecosistema digital fluido, mejorando la colaboración y el acceso a la información.",
    icon: (
      <Image
        width={40}
        height={40}
        src={systemIntegration}
        alt="Desarrollo a medida"
      />
    ),
  },
  {
    title: "Seguridad de Datos",
    description: "Protegemos tu información crítica con soluciones de seguridad avanzadas, garantizando la confianza de tus clientes y el cumplimiento normativo.",
    icon: (
      <Image width={40} height={40} src={encrypted} alt="Desarrollo a medida" />
    ),
  },
  {
    title: "Soporte Continuo",
    description: "Ofrecemos asistencia técnica 24/7 y mantenimiento proactivo para asegurar que tus soluciones digitales funcionen sin problemas.",
    icon: (
      <Image width={40} height={40} src={wrench} alt="Desarrollo a medida" />
    ),
  },

  // Puedes agregar más servicios aquí con la misma estructura
];
