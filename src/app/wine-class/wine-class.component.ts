import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-wine-class',
  templateUrl: './wine-class.component.html',
  styleUrls: ['./wine-class.component.css'],
})
export class WineClassComponent {
  @Input() image!: string;
  @Input() isNew? = false;
  @Input() label?: string;
}
