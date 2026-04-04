import { Component, inject } from '@angular/core';
import { RomanNumeralPipe } from '../../pipes/roman-numeral.pipe';
import { ScrollAnimation } from '../../directives/scroll-animation';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimation, RomanNumeralPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  i18n = inject(TranslationService);
}
