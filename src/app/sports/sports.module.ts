import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { SportsCardComponent } from './sports-card/sports-card.component';
import { SportsTableComponent } from './sports-table/sports-table.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    SportsCardComponent,
    SportsTableComponent
  ],
  exports: [
    SportsCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SportsModule { }
