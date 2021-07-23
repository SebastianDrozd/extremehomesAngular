import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalinfoComponent } from './additionalinfo.component';

describe('AdditionalinfoComponent', () => {
  let component: AdditionalinfoComponent;
  let fixture: ComponentFixture<AdditionalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
