import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerspageComponent } from './customerspage.component';

describe('CustomerspageComponent', () => {
  let component: CustomerspageComponent;
  let fixture: ComponentFixture<CustomerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
