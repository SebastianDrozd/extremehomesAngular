import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorhomeComponent } from './estimatorhome.component';

describe('EstimatorhomeComponent', () => {
  let component: EstimatorhomeComponent;
  let fixture: ComponentFixture<EstimatorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatorhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
