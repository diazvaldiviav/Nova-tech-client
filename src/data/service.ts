export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    buttonText: string;
  }


export const services: Service[] = [
    {
      id: 1,
      title: "Desarrollo de Páginas Web Personalizadas",
      description: "Creación exclusiva de sitios web que impulsan tu presencia online, sin dependencia de plantillas predefinidas.",
      icon: "🖥️",
      buttonText: "Ver Mas"
    },
    {
      id: 2,
      title: "Sistemas de Gestión para Negocios",
      description: "Soluciones de gestión interna que automatizan y simplifican tus operaciones diarias.",
      icon: "⚙️",
      buttonText: "Ver Mas"
    },
    {
      id: 3,
      title: "Aplicaciones Web Personalizadas",
      description: "Aplicaciones web a medida para gestionar reservas, citas y más, escalables y seguras.",
      icon: "☁️",
      buttonText: "Ver mas"
    },
    {
      id: 4,
      title: "Automatización de Procesos",
      description: "Maximiza la eficiencia con la automatización de tareas repetitivas y rutinarias.",
      icon: "🤖",
      buttonText: "Ver mas"
    },
    {
      id: 5,
      title: "Mantenimiento y Soporte Técnico",
      description: "Mantenimiento proactivo y soporte técnico para garantizar el rendimiento óptimo de tus sistemas.",
      icon: "🛠️",
      buttonText: "Ver mas"
    },
    {
      id: 6,
      title: "Consultoría y Asesoría Técnica",
      description: "Expertos a tu disposición para mejorar y optimizar tu infraestructura digital.",
      icon: "🎓",
      buttonText:  "Ver mas"
    }
  ];