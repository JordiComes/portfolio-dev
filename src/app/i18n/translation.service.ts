import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TRANSLATIONS, Lang, Translations } from './translations';

const SPANISH_COUNTRIES = new Set([
  'AR','BO','CL','CO','CR','CU','DO','EC','SV','GQ',
  'GT','HN','MX','NI','PA','PY','PE','ES','UY','VE',
]);

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private http = inject(HttpClient);
  private currentLang = signal<Lang>('es');

  lang = this.currentLang.asReadonly();
  t = computed<Translations>(() => TRANSLATIONS[this.currentLang()]);

  constructor() {
    this.http.get<{ country_code: string }>('https://ipapi.co/json/').subscribe({
      next: (data) => {
        const lang: Lang = SPANISH_COUNTRIES.has(data?.country_code) ? 'es' : 'en';
        this.currentLang.set(lang);
      },
      error: () => {
        // Fallback: detect via browser language
        const browserLang = navigator.language?.slice(0, 2);
        if (browserLang === 'en') this.currentLang.set('en');
      },
    });
  }

  toggleLang(): void {
    this.currentLang.update((l) => (l === 'es' ? 'en' : 'es'));
  }
}
