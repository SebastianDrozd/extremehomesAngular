import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateestimateComponent } from './createestimate.component';

describe('CreateestimateComponent', () => {
  let component: CreateestimateComponent;
  let fixture: ComponentFixture<CreateestimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateestimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
