import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PsychologistsComponent } from './components/psychologists/psychologists.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "./components/layout/layout.module";

@NgModule({
  declarations: [
    AppComponent,
    PsychologistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
