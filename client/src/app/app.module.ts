import { SubmitConfigService } from './services/submit-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormGroupName } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatButtonModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RunModelComponent } from './run-model/run-model.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { DownloadResultComponent } from './download-result/download-result.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfigurationComponent,
    RunModelComponent,
    ShowResultComponent,
    DownloadResultComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    ConfigurationComponent,
    ProgressSpinnerComponent
  ],
  providers: [SubmitConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
