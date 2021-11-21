import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./components/layout/layout.module";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    ComponentsModule,
    PagesModule,
    NgxStripeModule.forRoot(environment.stripeKey)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
