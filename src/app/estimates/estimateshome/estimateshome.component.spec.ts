import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateshomeComponent } from './estimateshome.component';

describe('EstimateshomeComponent', () => {
  let component: EstimateshomeComponent;
  let fixture: ComponentFixture<EstimateshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimateshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
