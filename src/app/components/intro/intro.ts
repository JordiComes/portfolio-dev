import { Component, output, inject } from '@angular/core';
import { TranslationService } from '../../i18n/translation.service';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  i18n = inject(TranslationService);
  onComplete = output<void>();

  particles = Array.from({length: 40}, (_, i) => i + 1);
  drifts = [15, -25, 20, -18, 30, -12, 22, -28, 16, -20, 25, -15, 19, -24, 14, -32, 27, -14, 21, -26, 18, -22, 29, -17, 23, -30, 12, -19, 26, -13, 31, -16, 24, -27, 11, -23, 28, -15, 20, -29];
  leftPositions = [8, 92, 15, 78, 35, 62, 45, 88, 22, 55, 70, 12, 48, 83, 28, 67, 40, 95, 18, 52, 75, 5, 58, 42, 90, 33, 60, 25, 80, 50, 38, 72, 10, 65, 47, 85, 20, 57, 30, 77];

  ngOnInit(): void {
    setTimeout(() => {
      this.onComplete.emit();
    }, 4000);
  }
}
