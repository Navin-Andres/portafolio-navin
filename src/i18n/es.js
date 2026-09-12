const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    profile: 'Trayectoria',
    contacts: 'Contactos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    lightMode: 'Activar modo claro',
    darkMode: 'Activar modo oscuro',
  },

  hero: {
    available: 'Disponible para nuevos proyectos',
    greeting: 'Hola, soy',
    description:
      'Desarrollo aplicaciones web y móviles utilizando tecnologías modernas y soluciones orientadas a resolver problemas reales.',
    downloadCV: 'Descargar CV',
    technologies: 'Tecnologías',
  },

  about: {
    eyebrow: 'About me',
    title: 'Sobre mí',
    intro:
      'Soy desarrollador Full Stack y estudiante de Ingeniería de Sistemas, enfocado en crear soluciones digitales útiles, claras y fáciles de usar.',
    approachTitle: 'Mi enfoque',
    approachText:
      'Combino desarrollo web y móvil con una mirada práctica: entender el problema, proponer una solución y construir una experiencia funcional para las personas que la usan.',
    whatIDoTitle: 'Lo que hago',
    whatIDo: [
      'Desarrollo de aplicaciones web con React y Node.js.',
      'Aplicaciones móviles con Flutter.',
      'Integración de bases de datos y servicios en la nube.',
    ],
    howIWorkTitle: 'Cómo trabajo',
    howIWork: [
      'Aprendizaje continuo y atención al detalle.',
      'Comunicación cercana con equipos y usuarios.',
      'Soluciones mantenibles y orientadas a resultados.',
    ],
  },

  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos realizados',
    subtitle:
      'Selección de trabajos y prototipos hechos con foco en interfaces, datos y experiencias funcionales.',
    viewDemo: 'Ver demo',
    viewGitHub: 'Ver GitHub',
    techLabel: 'Tecnologías de',
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Tecnologías y herramientas',
    subtitle:
      'Tecnologías que utilizo para crear aplicaciones web y móviles, desde la interfaz hasta los datos.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend y datos',
      tools: 'Herramientas',
    },
  },

  experience: {
    eyebrow: 'Experiencia',
    title: 'Trayectoria profesional',
    subtitle:
      'Un resumen corto de mi trabajo en desarrollo, soporte y colaboración con equipos y usuarios.',
    items: [
      {
        role: 'Desarrollador Fullstack',
        company: 'Areandina · Consultorio Jurídico',
        period: 'Mar 2026 - Jul 2026',
        summary:
          'Desarrollé y mantuve módulos web institucionales con React, Node.js/Express y PostgreSQL, integrando autenticación con JWT y Google OAuth 2.0, además de soporte en producción y trabajo directo con usuarios finales.',
      },
      {
        role: 'Técnico de Soporte',
        company: 'Air Services Ingeniería SAS (AISEING)',
        period: 'Nov 2022 - Mar 2023',
        summary:
          'Resolví incidentes técnicos y administré accesos en plataformas corporativas.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certificaciones',
    title: 'Formación y logros',
    subtitle:
      'Certificaciones y cursos que respaldan mi perfil técnico y mi aprendizaje continuo.',
    hours: 'horas',
  },

  education: {
    eyebrow: 'Educación',
    title: 'Formación académica',
    subtitle:
      'Mi formación combina ingeniería, soporte técnico y enfoque práctico para construir y mantener soluciones digitales.',
    items: [
      {
        period: 'Feb 2023 - Dic 2026',
        degree: 'Ingeniería de Sistemas',
        institution: 'Fundación Universitaria del Área Andina',
        note: 'Últimos semestres, graduación esperada en 2026.',
      },
      {
        period: 'SENA - Colombia',
        degree: 'Tecnólogo en Mantenimiento de Equipos de Cómputo',
        institution: 'Diseño e Instalación de Cableado Estructurado',
        note: 'Base técnica en soporte, infraestructura y redes.',
      },
    ],
  },

  contacts: {
    eyebrow: 'Contactos',
    title: 'Conectemos',
    subtitle:
      'Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones.',
  },

  footer: {
    eyebrow: 'Portfolio',
    tagline:
      'Desarrollador full stack enfocado en interfaces, backend, datos y soluciones funcionales.',
    contact: 'Contacto',
    about: 'Acerca de mí',
    credit: 'Diseñado y desarrollado por Navin Balmaceda.',
    available: 'Disponible para nuevos proyectos.',
  },

  projects_data: [
    {
      description:
        'Aplicación web para organizar la atención de una clínica, gestionar pacientes y facilitar la programación de citas.',
      points: [
        'Desarrollé el registro y la consulta de pacientes y médicos disponibles.',
        'Implementé la creación y búsqueda de citas por identificación del paciente.',
        'Configuré el backend en Flask con una base de datos MySQL en la nube mediante Aiven y Render.',
      ],
    },
    {
      description:
        'App web de Buzos con diseños únicos y estilo urbano.',
      points: [
        'Analicé los requerimientos del Frontend del cliente',
        'Resolví las agregaciones de los productos en catalogos del administrador',
        'Desarrollé la interfaz de inicio, card de productos de buzos, y carrito de compra de confirmacion de whatsapp.',
        'Implementé Inicio de sesion adminstrativo y gestion de productos y precios.',
      ],
    },
    {
      description:
        'Aplicación móvil que ayuda a encontrar puntos de disposición de residuos, enviar reportes y aprender más sobre el reciclaje.',
      points: [
        'Agregué la geolocalización de puntos de disposición de residuos.',
        'Desarrollé el sistema de reportes de quejas, sugerencias y contenidos educativos sobre reciclaje.',
      ],
    },
    {
      description:
        'Biblioteca digital para los amantes de la Nintendo DS, donde pueden explorar el catálogo de juegos y descubrir información sobre la consola.',
      points: [
        'Diseñé la exploración del catálogo histórico de Nintendo DS con datos en tiempo real.',
        'Desarrollé la aplicación multiplataforma para iOS y Android.',
        'Implementé la integración con Firebase y Twitch para mostrar contenido dinámico.',
      ],
    },
  ],
}

export default es
