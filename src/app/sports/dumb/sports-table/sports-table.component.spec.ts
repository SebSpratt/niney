import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsTableComponent } from './sports-table.component';

describe('SportsTableComponent', () => {
  let component: SportsTableComponent;
  let fixture: ComponentFixture<SportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
