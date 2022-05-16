import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css'],
})
export class ShowImageComponent {
  @Input() image!: string;
  @Input() label!: string;
  @Input() newBadge?: string;
  @Input() progress?: string;
}
