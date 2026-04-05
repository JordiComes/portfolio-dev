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
    securityError?: string;
    securityFieldError?: string;
    securityScriptError?: string;
    rateLimitError?: string;
    maxLengthError?: string;
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
          title: 'LIVIA — Plataforma IA Generativa',
          description:
            'Plataforma centralizada que integra múltiples LLMs (ChatGPT, Gemini, Claude) en un único entorno colaborativo para equipos de marketing y contenido. Incluye generador de email-marketing, contenido editorial y SEO, social media, editor colaborativo en tiempo real, sistema de prompts personalizable y acceso por API.',
          tags: ['Angular', 'Node.js', 'LLMs', 'REST API'],
        },
        {
          title: 'Portal de Proveedores Pampols',
          description:
            'Aplicación web para la gestión y homologación de proveedores de la empresa Pampols. Permite el alta de nuevos proveedores mediante un cuestionario guiado, la subida y verificación de documentos ISO, y el control automatizado de su caducidad con avisos proactivos, eliminando el proceso manual anterior.',
          tags: ['Angular', 'PHP', 'SQL', 'REST API'],
        },
        {
          title: 'Webs Kit Digital — Natural Optics Group',
          description:
            'Desarrollo de más de 30 sitios web para asociados de Natural Optics Group dentro del programa Kit Digital. Cada web incluía sistema de reserva de citas online, diseño responsive, soporte multiidioma (catalán, castellano, inglés), gestión de cookies y galerías dinámicas, con una estructura común adaptada a cada óptica.',
          tags: ['CodeIgniter', 'PHP', 'SQL', 'Kit Digital'],
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
      securityError: 'Error de seguridad. Por favor, inténtalo de nuevo.',
      securityFieldError: 'Caracteres no permitidos detectados.',
      securityScriptError: 'Etiquetas de script no están permitidas.',
      rateLimitError: 'Por favor, espera unos segundos antes de enviar de nuevo.',
      maxLengthError: 'El texto es demasiado largo.',
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
          title: 'LIVIA — Generative AI Platform',
          description:
            'Centralised platform integrating multiple LLMs (ChatGPT, Gemini, Claude) into a single collaborative workspace for marketing and content teams. Features an email-marketing generator, editorial and SEO content, social media, real-time collaborative editor, customisable prompt system, and API access.',
          tags: ['Angular', 'Node.js', 'LLMs', 'REST API'],
        },
        {
          title: 'Pampols Supplier Portal',
          description:
            'Web application for managing and certifying suppliers for Pampols. Enables supplier registration through a guided questionnaire, ISO document upload and verification, and automated expiry tracking with proactive alerts — replacing a fully manual process.',
          tags: ['Angular', 'PHP', 'SQL', 'REST API'],
        },
        {
          title: 'Kit Digital Websites — Natural Optics Group',
          description:
            'Development of over 30 websites for Natural Optics Group associates under the Kit Digital programme. Each site featured an online appointment booking system, responsive design, multilingual support (Catalan, Spanish, English), cookie consent management, and dynamic galleries — built on a shared structure tailored to each optical store.',
          tags: ['CodeIgniter', 'PHP', 'SQL', 'Kit Digital'],
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
      securityError: 'Security error. Please try again.',
      securityFieldError: 'Invalid characters detected.',
      securityScriptError: 'Script tags are not allowed.',
      rateLimitError: 'Please wait a few seconds before submitting again.',
      maxLengthError: 'Text is too long.',
    },
  },
};
