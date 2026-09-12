const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    profile: 'Experience',
    contacts: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lightMode: 'Switch to light mode',
    darkMode: 'Switch to dark mode',
  },

  hero: {
    available: 'Available for new projects',
    greeting: 'Hi, I\'m',
    description:
      'I build web and mobile applications using modern technologies and solutions focused on solving real-world problems.',
    downloadCV: 'Download CV',
    technologies: 'Technologies',
  },

  about: {
    eyebrow: 'About me',
    title: 'About me',
    intro:
      'I\'m a Full Stack developer and Systems Engineering student, focused on building useful, clear, and easy-to-use digital solutions.',
    approachTitle: 'My approach',
    approachText:
      'I combine web and mobile development with a practical mindset: understand the problem, propose a solution, and build a functional experience for the people who use it.',
    whatIDoTitle: 'What I do',
    whatIDo: [
      'Web application development with React and Node.js.',
      'Mobile applications with Flutter.',
      'Database integration and cloud services.',
    ],
    howIWorkTitle: 'How I work',
    howIWork: [
      'Continuous learning and attention to detail.',
      'Close communication with teams and users.',
      'Maintainable, results-oriented solutions.',
    ],
  },

  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured Projects',
    subtitle:
      'A selection of work and prototypes focused on interfaces, data, and functional experiences.',
    viewDemo: 'View demo',
    viewGitHub: 'View GitHub',
    techLabel: 'Technologies for',
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Technologies & Tools',
    subtitle:
      'Technologies I use to build web and mobile apps, from the interface to the data layer.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & Data',
      tools: 'Tools',
    },
  },

  experience: {
    eyebrow: 'Experience',
    title: 'Professional Experience',
    subtitle:
      'A brief summary of my work in development, support, and collaboration with teams and users.',
    items: [
      {
        role: 'Fullstack Developer',
        company: 'Areandina · Legal Clinic',
        period: 'Mar 2026 - Jul 2026',
        summary:
          'Built and maintained institutional web modules with React, Node.js/Express, and PostgreSQL, integrating authentication with JWT and Google OAuth 2.0, with production support and direct collaboration with end users.',
      },
      {
        role: 'Support Technician',
        company: 'Air Services Ingeniería SAS (AISEING)',
        period: 'Nov 2022 - Mar 2023',
        summary:
          'Resolved technical incidents and managed access permissions on corporate platforms.',
      },
    ],
  },

  certifications: {
    eyebrow: 'Certifications',
    title: 'Training & Achievements',
    subtitle:
      'Certifications and courses that back my technical profile and continuous learning.',
    hours: 'hours',
  },

  education: {
    eyebrow: 'Education',
    title: 'Academic Background',
    subtitle:
      'My training combines engineering, technical support, and a practical focus on building and maintaining digital solutions.',
    items: [
      {
        period: 'Feb 2023 - Dec 2026',
        degree: 'Systems Engineering',
        institution: 'Fundación Universitaria del Área Andina',
        note: 'Final semesters, expected graduation in 2026.',
      },
      {
        period: 'SENA - Colombia',
        degree: 'Computer Equipment Maintenance Technologist',
        institution: 'Structured Cabling Design & Installation',
        note: 'Technical foundation in support, infrastructure, and networking.',
      },
    ],
  },

  contacts: {
    eyebrow: 'Contact',
    title: 'Let\'s connect',
    subtitle:
      'I\'m open to job opportunities, freelance projects, and collaborations.',
  },

  footer: {
    eyebrow: 'Portfolio',
    tagline:
      'Full stack developer focused on interfaces, backend, data, and functional solutions.',
    contact: 'Contact',
    about: 'About me',
    credit: 'Designed and developed by Navin Balmaceda.',
    available: 'Available for new projects.',
  },

  projects_data: [
    {
      description:
        'Academic web application for medical management, patient registration, and centralized appointment scheduling.',
      points: [
        'Patient and available doctor registration and lookup.',
        'Appointment creation and search by patient ID.',
        'Flask backend with cloud MySQL database (Aiven), deployed on Render.',
      ],
    },
    {
      description:
        'Web application for hoodies with unique designs and an urban style.',
      points: [
        'Analyzed the client frontend requirements.',
        'Implemented product aggregation in the administrator catalogs.',
        'Developed the home interface, hoodie product cards, and shopping cart with WhatsApp confirmation.',
        'Implemented administrative login and product and price management.',
      ],
    },
    {
      description:
        'Mobile app that helps users find waste disposal points, submit reports, and learn more about recycling.',
      points: [
        'Added geolocation for waste disposal points.',
        'Developed a system for complaints, suggestions, and recycling educational content.',
      ],
    },
    {
      description:
        'Digital library for Nintendo DS enthusiasts to explore the game catalog and discover information about the console.',
      points: [
        'Designed the exploration of the Nintendo DS catalog with real-time data.',
        'Developed the cross-platform application for iOS and Android.',
        'Implemented Firebase and Twitch integration for dynamic content.',
      ],
    },
  ],
}

export default en
