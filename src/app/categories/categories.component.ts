import { Component, OnInit } from '@angular/core';
import { wines } from '../mock.data';
import { WINES } from '../data-template';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  wines: WINES[] = wines;
  finishedWines = wines.filter((wine) => wine.isFinished);
  inProgressWine = wines.filter((wine) => wine.progress);
}
