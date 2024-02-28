import {
  CircleFadingPlus,
  MonitorSmartphone,
  Rabbit,
  TextSearch,
  Wand2,
  Wrench,
} from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Diseño Responsivo",
    description:
      "Tu sitio web se adaptará automáticamente a diferentes dispositivos y tamaños de pantalla, garantizando una experiencia de usuario óptima en todos los dispositivos.",
    icon: <MonitorSmartphone color="#ababab" size={80} />,
  },
  {
    id: 2,
    title: "Optimización SEO",
    description:
      "Implementación de prácticas de optimización para motores de búsqueda para mejorar la visibilidad de tu sitio web en los resultados de búsqueda y atraer más tráfico orgánico.",
    icon: <TextSearch color="#ababab" size={80} />,
  },
  {
    id: 3,
    title: "Velocidad de Carga Rápida",
    description:
      "Optimización del rendimiento del sitio web para garantizar tiempos de carga rápidos, lo que mejora la experiencia del usuario y el posicionamiento en los motores de búsqueda.",
    icon: <Rabbit color="#ababab" size={80} />,
  },
  {
    id: 4,
    title: "Diseño Personalizado",
    description:
      "Creación de un diseño web único y a medida que refleje la identidad de tu marca y se diferencie de la competencia.",
    icon: <Wand2 color="#ababab" size={80} />,
  },
  {
    id: 5,
    title: "Actualizaciones y Mantenimiento",
    description:
      "Ofrecimiento de servicios de actualización y mantenimiento continuo para garantizar que tu sitio web esté siempre seguro, funcione sin problemas y se mantenga al día con las últimas tendencias tecnológicas.",
    icon: <Wrench color="#ababab" size={80} />,
  },
  {
    id: 6,
    title: "Integración de Redes Sociales",
    description:
      "Inclusión de enlaces y widgets de redes sociales para fomentar la interacción con tu audiencia y aumentar la presencia en línea de tu marca.",
    icon: <CircleFadingPlus color="#ababab" size={80} />,
  },
];
