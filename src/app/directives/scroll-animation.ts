import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimation implements OnInit, OnDestroy {
  direction = input<'left' | 'right' | 'bottom'>('bottom');
  delay = input<number>(0);
  threshold = input<number>(0.15);

  private el = inject(ElementRef);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;
    const dir = this.direction();

    // Initial hidden state
    element.style.opacity = '0';
    element.style.transition = `opacity 0.7s ease ${this.delay()}ms, transform 0.7s ease ${this.delay()}ms`;

    switch (dir) {
      case 'left':
        element.style.transform = 'translateX(-60px)';
        break;
      case 'right':
        element.style.transform = 'translateX(60px)';
        break;
      case 'bottom':
      default:
        element.style.transform = 'translateY(40px)';
        break;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
            this.observer.unobserve(element);
          }
        });
      },
      { threshold: this.threshold() }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
