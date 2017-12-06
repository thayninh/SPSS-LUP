
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RunModelComponent } from './run-model/run-model.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { DownloadResultComponent } from './download-result/download-result.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NavbarComponent, // Default Route
    pathMatch: 'full'
  },
  
  { path: '**', 
    component: NavbarComponent, 
    pathMatch: 'full' } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }