import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./components/layout/layout.module";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { ScheduleComponent } from './src/app/pages/psychologist/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ComponentsModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
