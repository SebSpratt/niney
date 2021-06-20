import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SportsCardComponent } from './smart/sports-card/sports-card.component';
import { SportsTableComponent } from './dumb/sports-table/sports-table.component';
import { MaterialModule } from '../shared/material.module';
import { SportsOverviewComponent } from './smart/sports-overview/sports-overview.component';
import { SportsAccordionComponent } from './dumb/sports-accordion/sports-accordion.component';

@NgModule({
  declarations: [
    SportsCardComponent,
    SportsTableComponent,
    SportsOverviewComponent,
    SportsAccordionComponent
  ],
  exports: [
    SportsCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SportsModule { }
