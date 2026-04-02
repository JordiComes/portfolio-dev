import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollTo(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
