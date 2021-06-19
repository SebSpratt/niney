import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SportsModule } from '../sports/sports.module';

const routes: Route[] = [
  { path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SportsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
