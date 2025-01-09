export interface Project {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    logoUrl: string;
    description: string;
    demoUrl?: string;    // Opcional: URL para la demo
  codeUrl?: string;    // Opcional: URL para el código
  technologies?: string[]; // Opcional: tecnologías usadas
  longDescription?: string; // Opcional: descripción más detallada
  }

  const mockupImages = [
   // Laptops y Código
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
  
  // Espacios de trabajo
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2',
  
  // Apps y Dispositivos
  'https://images.unsplash.com/photo-1555421689-491a97ff2040',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3',
  'https://images.unsplash.com/photo-1535223289827-42f1e9919769',
  
  // Diseño y UI/UX
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  
  // Tecnología Moderna
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
  
  // Desarrollo Web
  'https://images.unsplash.com/photo-1547658719-da2b51169166',
  'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3'
  ];

  const techLogos = [
    // Frameworks y Librerías
    'https://brandeps.com/logo-download/R/React-logo-vector-01.svg',
    'https://brandeps.com/logo-download/A/Angular-logo-vector-01.svg',
    'https://brandeps.com/logo-download/V/Vue-logo-vector-01.svg',
    
    // Lenguajes de Programación
    'https://brandeps.com/logo-download/P/Python-logo-vector-01.svg',
    'https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg',
    'https://brandeps.com/logo-download/T/TypeScript-logo-vector-01.svg',
    
    // Bases de Datos
    'https://brandeps.com/logo-download/M/MongoDB-logo-vector-01.svg',
    'https://brandeps.com/logo-download/P/PostgreSQL-logo-vector-01.svg',
    'https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg',
    
    // Cloud y DevOps
    'https://brandeps.com/logo-download/A/AWS-logo-vector-01.svg',
    'https://brandeps.com/logo-download/D/Docker-logo-vector-01.svg',
    'https://brandeps.com/logo-download/K/Kubernetes-logo-vector-01.svg'
  ];


export const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      imageUrl: mockupImages[2], // Asegúrate de tener estas imágenes
      logoUrl: techLogos[0],
      description: 'Plataforma de comercio electrónico completa'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      imageUrl: mockupImages[3],
      logoUrl: techLogos[1],
      description: 'Aplicación móvil para servicios bancarios'
    },
    {
      id: 3,
      title: 'CRM System',
      category: 'desktop',
      imageUrl: mockupImages[0],
      logoUrl: techLogos[2],
      description: 'Sistema de gestión de relaciones con clientes'
    },
    {
        id: 4,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[4],
        logoUrl: techLogos[3],
        description: 'Plataforma de comercio electrónico completa'
    },
    {
        id: 5,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[5],
        logoUrl: techLogos[4],
        description: 'Plataforma de comercio electrónico completa'

    },
    {
        id: 6,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[6],
        logoUrl: techLogos[5],
        description: 'Plataforma de comercio electrónico completa'
    },
    {
        id: 7,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[7],
        logoUrl: techLogos[6],
        description: 'Plataforma de comercio electrónico completa'
    },
    {
        id: 8,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[8],
        logoUrl: techLogos[7],
        description: 'Plataforma de comercio electrónico completa'
    },
    {
        id: 9,
        title: 'E-commerce Platform',
        category: 'web',
        imageUrl: mockupImages[9],
        logoUrl: techLogos[8],
        description: 'Plataforma de comercio electrónico completa'
    },

    // Añade más proyectos según necesites
  ];