import { Component } from '@angular/core';
import { HERO } from '../data-template';
import { heroContent } from '../mock.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  hero: HERO = heroContent;
}
