import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualestimateComponent } from './individualestimate.component';

describe('IndividualestimateComponent', () => {
  let component: IndividualestimateComponent;
  let fixture: ComponentFixture<IndividualestimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualestimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
