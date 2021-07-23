import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentcusttableComponent } from './recentcusttable.component';

describe('RecentcusttableComponent', () => {
  let component: RecentcusttableComponent;
  let fixture: ComponentFixture<RecentcusttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentcusttableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentcusttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
