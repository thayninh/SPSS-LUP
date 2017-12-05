import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RunModelComponent } from './run-model/run-model.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { DownloadResultComponent } from './download-result/download-result.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: MapComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MapComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'configuration',
    component: ConfigurationComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'run-model',
    component: RunModelComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'show-result',
    component: ShowResultComponent, // Default Route
    pathMatch: 'full'
  },
  {
    path: 'download-result',
    component: DownloadResultComponent, // Default Route
    pathMatch: 'full'
  },
  { path: '**', 
    component: MapComponent, 
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