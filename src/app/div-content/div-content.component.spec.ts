import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivContentComponent } from './div-content.component';

describe('DivContentComponent', () => {
  let component: DivContentComponent;
  let fixture: ComponentFixture<DivContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
