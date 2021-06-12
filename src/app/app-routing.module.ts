import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrecuencyTableComponent} from './components/frecuency-table/frecuency-table.component';
import {ParametersComponent} from './components/parameters/parameters.component';

const routes: Routes = [
  {path: 'FrecuencyTableComponent', component: FrecuencyTableComponent},
  {path: 'ParametersComponent', component: ParametersComponent},
  { path: '',   redirectTo: 'FrecuencyTableComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrecuencyTableComponent,ParametersComponent];
