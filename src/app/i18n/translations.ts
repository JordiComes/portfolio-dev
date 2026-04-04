export type Lang = 'es' | 'en';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    cta: string;
  };
  about: {
    title: string;
    bio: string[];
    techTitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageError: string;
    submit: string;
    successTitle: string;
    successMessage: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Full Stack Developer | AI Integrations',
      tagline:
        'Creo soluciones donde la tecnología y la Inteligencia Artificial aportan valor',
      cta: 'Ver Proyectos',
    },
    about: {
      title: 'Sobre mí',
      bio: [
        'Soy desarrollador de aplicaciones y me encanta crear soluciones donde la tecnología y la Inteligencia Artificial realmente aportan valor.',
        'Trabajo a diario con JavaScript, React.js, Angular, Node.js y PHP, construyendo apps que no solo funcionan bien, sino que hacen la vida más fácil a quienes las usan.',
        'Actualmente formo parte de <strong>UVE Group</strong>, donde desarrollo aplicaciones con integraciones de IA para clientes muy reconocidos.',
        'Disfruto mucho del proceso: entender el reto, encontrar la mejor manera de resolverlo y convertirlo en una app clara, útil y bien hecha.',
      ],
      techTitle: 'Tech Stack',
    },
    projects: {
      title: 'Proyectos',
      subtitle:
        'Algunos de los proyectos en los que he trabajado, combinando desarrollo full stack con integraciones de IA.',
      items: [
        {
          title: 'AI Customer Assistant',
          description:
            'Chatbot inteligente con procesamiento de lenguaje natural para atención al cliente automatizada, integrado con APIs de IA generativa.',
          tags: ['Angular', 'Node.js', 'OpenAI', 'WebSockets'],
        },
        {
          title: 'Data Analytics Dashboard',
          description:
            'Panel de análisis de datos en tiempo real con visualizaciones interactivas y predicciones basadas en modelos de machine learning.',
          tags: ['React.js', 'Python', 'TensorFlow', 'D3.js'],
        },
        {
          title: 'Smart Document Processor',
          description:
            'Sistema de procesamiento automático de documentos con extracción de datos mediante IA y clasificación inteligente.',
          tags: ['Angular', 'PHP', 'AI/ML', 'REST API'],
        },
        {
          title: 'E-Commerce Platform',
          description:
            'Plataforma de comercio electrónico con recomendaciones personalizadas por IA y búsqueda semántica avanzada.',
          tags: ['React.js', 'Node.js', 'MongoDB', 'AI'],
        },
        {
          title: 'Workflow Automation Tool',
          description:
            'Herramienta de automatización de flujos de trabajo empresariales con integración de asistentes de IA para optimización de procesos.',
          tags: ['Angular', 'TypeScript', 'Node.js', 'LLMs'],
        },
        {
          title: 'Real-Time Monitoring System',
          description:
            'Sistema de monitorización en tiempo real con alertas predictivas basadas en patrones detectados por inteligencia artificial.',
          tags: ['React.js', 'PHP', 'WebSockets', 'AI/ML'],
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Interesado en mi perfil? Déjame tus datos y te enviaré mi CV.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      nameError: 'El nombre debe tener al menos 2 caracteres.',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      emailError: 'Introduce un email válido.',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntame un poco sobre ti o tu empresa...',
      messageError: 'El mensaje debe tener al menos 10 caracteres.',
      submit: 'Solicitar CV',
      successTitle: 'Solicitud enviada',
      successMessage:
        'Gracias por tu interés. Revisaré tu solicitud y te enviaré mi CV a la mayor brevedad.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer | AI Integrations',
      tagline:
        'I build solutions where technology and Artificial Intelligence deliver real value.',
      cta: 'View Projects',
    },
    about: {
      title: 'About me',
      bio: [
        'I am an application developer and I love creating solutions where technology and Artificial Intelligence truly add value.',
        'I work daily with JavaScript, React.js, Angular, Node.js and PHP, building apps that not only work well, but make life easier for their users.',
        'I am currently part of <strong>UVE Group</strong>, where I develop applications with AI integrations for well-known clients.',
        'I really enjoy the process: understanding the challenge, finding the best way to solve it, and turning it into a clear, useful and well-crafted app.',
      ],
      techTitle: 'Tech Stack',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Some of the projects I have worked on, combining full stack development with AI integrations.',
      items: [
        {
          title: 'AI Customer Assistant',
          description:
            'Intelligent chatbot with natural language processing for automated customer service, integrated with generative AI APIs.',
          tags: ['Angular', 'Node.js', 'OpenAI', 'WebSockets'],
        },
        {
          title: 'Data Analytics Dashboard',
          description:
            'Real-time data analytics dashboard with interactive visualizations and predictions based on machine learning models.',
          tags: ['React.js', 'Python', 'TensorFlow', 'D3.js'],
        },
        {
          title: 'Smart Document Processor',
          description:
            'Automatic document processing system with AI-powered data extraction and intelligent classification.',
          tags: ['Angular', 'PHP', 'AI/ML', 'REST API'],
        },
        {
          title: 'E-Commerce Platform',
          description:
            'E-commerce platform with AI-powered personalized recommendations and advanced semantic search.',
          tags: ['React.js', 'Node.js', 'MongoDB', 'AI'],
        },
        {
          title: 'Workflow Automation Tool',
          description:
            'Enterprise workflow automation tool with AI assistant integration for process optimization.',
          tags: ['Angular', 'TypeScript', 'Node.js', 'LLMs'],
        },
        {
          title: 'Real-Time Monitoring System',
          description:
            'Real-time monitoring system with predictive alerts based on patterns detected by artificial intelligence.',
          tags: ['React.js', 'PHP', 'WebSockets', 'AI/ML'],
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in my profile? Leave me your details and I\'ll send you my CV.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      nameError: 'Name must be at least 2 characters.',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      emailError: 'Enter a valid email address.',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me a bit about you or your company...',
      messageError: 'Message must be at least 10 characters.',
      submit: 'Request CV',
      successTitle: 'Request sent',
      successMessage:
        'Thank you for your interest. I will review your request and send you my CV as soon as possible.',
    },
  },
};
