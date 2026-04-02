import { Component, signal, inject, HostListener } from '@angular/core';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  i18n = inject(TranslationService);
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(id: string): void {
    this.closeMenu();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
