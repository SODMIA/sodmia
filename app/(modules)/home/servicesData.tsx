import Image from "next/image";
import pantone from "@/public/icons/pantone.png";
import optimization from "@/public/icons/optimization.png";
import consultingColor from "@/public/icons/consultingColor.png";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 dark:text-violet-600"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Seguridad de datos",
    description:
      "Implementación de medidas de seguridad avanzadas para proteger la integridad y confidencialidad de los datos del cliente.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 dark:text-violet-600"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    title: "Soporte y mantenimiento",
    description:
      "Ofrecemos soporte continuo y mantenimiento para garantizar el funcionamiento óptimo del software desarrollado.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 dark:text-violet-600"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },

  // Puedes agregar más servicios aquí con la misma estructura
];
