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
        'Mobile app built with Flutter/Dart, Firebase, and Google Maps API for geolocating waste disposal points, reporting complaints and suggestions, and providing recycling educational content.',
      points: [
        'Geolocation of waste disposal points.',
        'Complaints, suggestions, and educational recycling content reporting.',
      ],
    },
    {
      description:
        'Personal web portfolio built with React, Vite, and CSS, designed to showcase projects, experience, and skills with a modern, responsive, and interactive design.',
      points: [
        'Responsive design focused on user experience.',
        'Modular structure with reusable components and dynamic data.',
        'Interactive sections for projects, experience, and skills.',
      ],
    },
    {
      description:
        'Cross-platform app built with Flutter for Nintendo DS enthusiasts. Acts as an interactive digital library to explore the console\'s historical catalog with real-time data.',
      points: [
        'Exploration of Nintendo DS historical catalog with real-time data.',
        'Cross-platform architecture with Flutter for iOS and Android.',
        'Integration with Firebase and Twitch for dynamic content.',
      ],
    },
    {
      description:
        'Academic web application for medical management, patient registration, and centralized appointment scheduling.',
      points: [
        'Patient and available doctor registration and lookup.',
        'Appointment creation and search by patient ID.',
        'Flask backend with cloud MySQL database (Aiven), deployed on Render.',
      ],
    },
  ],
}

export default en
