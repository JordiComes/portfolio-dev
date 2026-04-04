import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Intro } from './components/intro/intro';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, Contact, Intro],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  introComplete = signal(false);

  onIntroComplete(): void {
    this.introComplete.set(true);
  }
}
