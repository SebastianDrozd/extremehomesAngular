import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateschartComponent } from './estimateschart.component';

describe('EstimateschartComponent', () => {
  let component: EstimateschartComponent;
  let fixture: ComponentFixture<EstimateschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateschartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
