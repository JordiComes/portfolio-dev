import { Component, inject } from '@angular/core';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  i18n = inject(TranslationService);

  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
