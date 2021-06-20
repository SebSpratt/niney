import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesCardComponent } from './countries-card/countries-card.component';
import { CountriesTableComponent } from './countries-table/countries-table.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    CountriesCardComponent,
    CountriesTableComponent
  ],
  exports: [
    CountriesCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CountriesModule { }
