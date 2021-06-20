import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesCardComponent } from './leagues-card/leagues-card.component';
import { LeaguesTableComponent } from './leagues-table/leagues-table.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    LeaguesCardComponent,
    LeaguesTableComponent
  ],
  exports: [
    LeaguesCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LeaguesModule { }
