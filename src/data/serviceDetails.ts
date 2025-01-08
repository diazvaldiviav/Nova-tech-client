export interface ServicePlan {
    plan: string;
    description: string;
    price: string | number;
  }
  
  export interface ServiceExtra {
    name: string;
    description: string;
    price: number;
  }
  
  export interface ServiceDetail {
    id: number;
    title: string;
    mainDescription: string;
    icon: string;
    plans: ServicePlan[];
    extras: ServiceExtra[];
    features: string[];
    buttonText: string;
  }

  export interface CombinedPackage {
    id: number;
    title: string;
    services: string[];
    basePrice: number;
    description: string;
    savings: string;
  }
  
  export const servicesDetails: ServiceDetail[] = [
    {
      id: 1,
      title: "Desarrollo de Páginas Web Personalizadas",
      mainDescription: "Creación exclusiva de sitios web que impulsan tu presencia online, sin dependencia de plantillas predefinidas.",
      icon: "🖥️",
      plans: [
        {
          plan: "Landing Page",
          description: "1 página, diseño básico, formulario de contacto.",
          price: 500
        },
        {
          plan: "Web Corporativa",
          description: "5-7 páginas, optimización SEO básico, adaptable a móviles.",
          price: "1,200 - 1,800"
        },
        {
          plan: "E-commerce Básico",
          description: "Tienda con hasta 20 productos, carrito de compras.",
          price: 2500
        },
        {
          plan: "E-commerce Avanzado",
          description: "Tienda completa, inventario y pasarela de pagos.",
          price: "3,500 - 5,000"
        }
      ],
      extras: [
        {
          name: "Dominio y hosting",
          description: "(1 año)",
          price: 150
        },
        {
          name: "Optimización SEO Avanzada",
          description: "Posicionamiento en buscadores",
          price: 300
        },
        {
          name: "Multilenguaje",
          description: "Soporte para múltiples idiomas",
          price: 400
        }
      ],
      features: [
        "Diseño personalizado y único",
        "Responsive design",
        "Optimización de velocidad",
        "Integración con redes sociales",
        "Panel de administración",
        "Soporte técnico"
      ],
      buttonText: "Solicita una cotización gratuita"
    },

    {
        id: 2,
        title: "Sistemas de Gestión para Negocios (ERP/CRM Livianos)",
        mainDescription: "Creación de sistemas personalizados para la gestión interna de negocios.",
        icon: "⚙️",
        plans: [
          {
            plan: "Sistema Básico",
            description: "CRM básico, gestión de clientes, facturación sencilla.",
            price: 1500
          },
          {
            plan: "Sistema Avanzado",
            description: "CRM con inventario, reportes, y múltiples usuarios.",
            price: "3,000 - 4,000"
          },
          {
            plan: "Sistema Completo",
            description: "ERP liviano, automatización y módulos personalizados.",
            price: "5,000 - 7,000"
          }
        ],
        extras: [
          {
            name: "Integración con tienda en línea",
            description: "Conexión con e-commerce",
            price: 1000
          },
          {
            name: "Módulos adicionales",
            description: "Por módulo",
            price: 800
          }
        ],
        features: [
          "Gestión de clientes",
          "Facturación electrónica",
          "Control de inventario",
          "Reportes personalizados",
          "Múltiples usuarios",
          "Soporte técnico"
        ],
        buttonText: "Explora planes y precios"
      },

      {
        id: 3,
        title: "Aplicaciones Web Personalizadas",
        mainDescription: "Desarrollo de aplicaciones web adaptadas a las necesidades específicas del cliente.",
        icon: "☁️",
        plans: [
          {
            plan: "Aplicación Sencilla",
            description: "1 funcionalidad (agendar citas, registro de usuarios).",
            price: 2000
          },
          {
            plan: "Aplicación Completa",
            description: "Múltiples módulos, dashboard, reportes avanzados.",
            price: "4,000 - 7,000"
          }
        ],
        extras: [
          {
            name: "Módulo de pagos en línea",
            description: "Integración con pasarela de pagos",
            price: 800
          },
          {
            name: "API externa",
            description: "Integración con terceros",
            price: 1200
          }
        ],
        features: [
          "Diseño personalizado",
          "Panel de administración",
          "Reportes avanzados",
          "Seguridad integrada",
          "Escalabilidad",
          "Soporte técnico"
        ],
        buttonText: "Consulta detalles"
      },

      {
        id: 4,
        title: "Automatización de Procesos (RPA Liviano)",
        mainDescription: "Automatización de tareas repetitivas en negocios.",
        icon: "🤖",
        plans: [
          {
            plan: "Automatización Básica",
            description: "Scripts sencillos (envío de correos, generación de reportes).",
            price: "800 - 1,200"
          },
          {
            plan: "Automatización Completa",
            description: "Bots y procesos complejos (integración de datos, RPA liviano).",
            price: "2,500 - 3,500"
          }
        ],
        extras: [
          {
            name: "Automatización de pagos y facturación",
            description: "Integración con sistemas de pago",
            price: 1000
          }
        ],
        features: [
          "Automatización de tareas",
          "Integración de sistemas",
          "Reportes automáticos",
          "Monitoreo de procesos",
          "Alertas y notificaciones",
          "Soporte técnico"
        ],
        buttonText: "Automatiza tu negocio"
      },

      {
        id: 5,
        title: "Mantenimiento y Soporte Técnico",
        mainDescription: "Mantenimiento web y soporte para sistemas o aplicaciones ya desarrolladas.",
        icon: "🛠️",
        plans: [
          {
            plan: "Mantenimiento Básico",
            description: "Revisión mensual, backups y pequeñas correcciones.",
            price: "100/mes"
          },
          {
            plan: "Mantenimiento Completo",
            description: "Revisión semanal, actualizaciones y soporte prioritario.",
            price: "300 - 500/mes"
          }
        ],
        extras: [
          {
            name: "Actualizaciones mayores",
            description: "Por proyecto",
            price: 400
          },
          {
            name: "Horas adicionales de soporte técnico",
            description: "Por hora",
            price: 50
          }
        ],
        features: [
          "Backups periódicos",
          "Monitoreo continuo",
          "Actualizaciones de seguridad",
          "Soporte técnico",
          "Correcciones de errores",
          "Informes de mantenimiento"
        ],
        buttonText: "Obtén soporte ahora"
      }, 
     
      {
        id: 6,
        title: "Consultoría y Asesoría Técnica",
        mainDescription: "Asesoramiento técnico para proyectos de desarrollo o mejora digital.",
        icon: "🎓",
        plans: [
          {
            plan: "Asesoría Básica",
            description: "1 sesión (1 hora), revisión de proyectos o ideas.",
            price: "100/hora"
          },
          {
            plan: "Plan de Consultoría",
            description: "Análisis y propuesta de mejora (entrega de informe).",
            price: "300 - 500"
          }
        ],
        extras: [],
        features: [
          "Evaluación de proyectos",
          "Recomendaciones técnicas",
          "Análisis de viabilidad",
          "Propuestas de mejora",
          "Documentación detallada",
          "Seguimiento personalizado"
        ],
        buttonText: "Reserva una consulta"
      }

    // ... Puedes agregar más servicios siguiendo la misma estructura
  ];

  export const pricingStrategy = {
    multiServiceDiscount: 10, // Porcentaje de descuento
    discountConditions: "Descuento del 10% para clientes que contraten 2 o más servicios en un mismo proyecto.",
    minimumServices: 2,
    additionalNotes: [
      "Los precios base pueden variar según requerimientos específicos",
      "Consulta por descuentos en proyectos a largo plazo",
      "Precios especiales para startups y organizaciones sin fines de lucro"
    ]
  };

  export const combinedPackages: CombinedPackage[] = [
    {
      id: 1,
      title: "Web + CRM Básico",
      services: [
        "Desarrollo de Páginas Web Personalizadas",
        "Sistemas de Gestión para Negocios"
      ],
      basePrice: 2500,
      description: "Página web corporativa con sistema de gestión de clientes integrado",
      savings: "Ahorro aproximado del 10% sobre precios individuales"
    },
    {
      id: 2,
      title: "Tienda en Línea + ERP",
      services: [
        "E-commerce Avanzado",
        "Sistema Completo ERP"
      ],
      basePrice: 6000,
      description: "Tienda en línea completa integrada con sistema de gestión empresarial",
      savings: "Ahorro aproximado del 10% sobre precios individuales"
    },
    {
      id: 3,
      title: "Aplicación Web + Automatización",
      services: [
        "Aplicaciones Web Personalizadas",
        "Automatización de Procesos"
      ],
      basePrice: 5500,
      description: "Aplicación web personalizada con procesos automatizados integrados",
      savings: "Ahorro aproximado del 10% sobre precios individuales"
    }
  ];