import { Component } from '@angular/core';
import { ScrollAnimation } from '../../directives/scroll-animation';

interface Project {
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimation],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
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
  ];
}
