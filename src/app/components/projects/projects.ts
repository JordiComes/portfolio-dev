import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { RomanNumeralPipe } from '../../pipes/roman-numeral.pipe';
import { ScrollAnimation } from '../../directives/scroll-animation';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimation, RomanNumeralPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnDestroy {
  i18n = inject(TranslationService);

  @ViewChild('eclipseRef') eclipseRef!: ElementRef<HTMLElement>;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.eclipseRef.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('eclipse-visible');
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
