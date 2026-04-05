import { Component, inject } from '@angular/core';
import { ScrollAnimation } from '../../directives/scroll-animation';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimation],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  i18n = inject(TranslationService);

  technologies = [
    'Python',
    'Quantum Computing',
    'Qiskit',
    'IBM Quantum',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React.js',
    'Node.js',
    'PHP',
    'AI / ML',
    'REST APIs',
  ];
}
