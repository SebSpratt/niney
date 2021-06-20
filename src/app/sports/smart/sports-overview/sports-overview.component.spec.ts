import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsOverviewComponent } from './sports-overview.component';

describe('SportsOverviewComponent', () => {
  let component: SportsOverviewComponent;
  let fixture: ComponentFixture<SportsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
