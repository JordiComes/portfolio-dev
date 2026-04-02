import { Component } from '@angular/core';
import { ScrollAnimation } from '../../directives/scroll-animation';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimation],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  technologies = [
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
