import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttableComponent } from './recenttable.component';

describe('RecenttableComponent', () => {
  let component: RecenttableComponent;
  let fixture: ComponentFixture<RecenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
