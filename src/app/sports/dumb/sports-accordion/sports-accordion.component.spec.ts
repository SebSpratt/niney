import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsAccordionComponent } from './sports-accordion.component';

describe('SportsAccordionComponent', () => {
  let component: SportsAccordionComponent;
  let fixture: ComponentFixture<SportsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
