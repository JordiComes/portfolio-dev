import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, Lang, Translations } from './translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLang = signal<Lang>('es');

  lang = this.currentLang.asReadonly();
  t = computed<Translations>(() => TRANSLATIONS[this.currentLang()]);

  toggleLang(): void {
    this.currentLang.update((l) => (l === 'es' ? 'en' : 'es'));
  }
}
