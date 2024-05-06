import Image from "next/image";
import pantone from "@/public/icons/pantone.png";
import optimization from "@/public/icons/optimization.png";
import consultingColor from "@/public/icons/consultingColor.png";
import systemIntegration from "@/public/icons/systemIntegration.png";
import encrypted from "@/public/icons/encrypted.png";
import wrench from "@/public/icons/wrench.png";

export const servicesData = [
  {
    title: "Desarrollo a medida",
    description:
      "Creación de software personalizado para satisfacer las necesidades específicas de cada cliente.",
    icon: (
      <Image width={40} height={40} src={pantone} alt="Desarrollo a medida" />
    ),
  },
  {
    title: "Optimización de procesos",
    description:
      "Análisis y mejora de los procesos internos mediante soluciones tecnológicas.",
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
    title: "Consultoría especializada",
    description:
      "Asesoramiento experto en estrategias de digitalización y desarrollo de software.",
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
    title: "Integración de sistemas",
    description:
      "Implementación de sistemas integrados para una gestión eficiente de la información.",
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
    title: "Seguridad de datos",
    description:
      "Implementación de medidas de seguridad avanzadas para proteger la integridad y confidencialidad de los datos del cliente.",
    icon: (
      <Image width={40} height={40} src={encrypted} alt="Desarrollo a medida" />
    ),
  },
  {
    title: "Soporte y mantenimiento",
    description:
      "Ofrecemos soporte continuo y mantenimiento para garantizar el funcionamiento óptimo del software desarrollado.",
    icon: (
      <Image width={40} height={40} src={wrench} alt="Desarrollo a medida" />
    ),
  },

  // Puedes agregar más servicios aquí con la misma estructura
];
