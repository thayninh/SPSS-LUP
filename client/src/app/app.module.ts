import { SubmitConfigService } from './services/submit-config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormGroupName } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RunModelComponent } from './run-model/run-model.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { DownloadResultComponent } from './download-result/download-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConfigurationComponent,
    RunModelComponent,
    ShowResultComponent,
    DownloadResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    ConfigurationComponent,
  ],
  providers: [SubmitConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
