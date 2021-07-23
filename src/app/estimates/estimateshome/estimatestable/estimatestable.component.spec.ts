import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatestableComponent } from './estimatestable.component';

describe('EstimatestableComponent', () => {
  let component: EstimatestableComponent;
  let fixture: ComponentFixture<EstimatestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatestableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
