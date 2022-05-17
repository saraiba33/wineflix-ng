import { Component } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css'],
})
export class HeroContentComponent {
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
}
