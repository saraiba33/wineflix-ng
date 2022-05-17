import { Component } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css'],
})
export class ControlButtonsComponent {
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
}
