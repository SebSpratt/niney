import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportsOverviewComponent } from './sports/smart/sports-overview/sports-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'sports',
    component: SportsOverviewComponent,
    loadChildren: () => import('./sports/sports.module').then((m) => m.SportsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
