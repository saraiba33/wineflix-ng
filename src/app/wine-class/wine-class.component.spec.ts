import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineClassComponent } from './wine-class.component';

describe('WineClassComponent', () => {
  let component: WineClassComponent;
  let fixture: ComponentFixture<WineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
