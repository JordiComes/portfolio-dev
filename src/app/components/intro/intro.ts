import { Component, output } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  onComplete = output<void>();

  ngOnInit(): void {
    setTimeout(() => {
      this.onComplete.emit();
    }, 4000);
  }
}
