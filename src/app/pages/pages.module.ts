import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PsychologistsComponent } from "./psychologists/psychologists.component";
import {LayoutModule} from "../components/layout/layout.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    PsychologistsComponent
  ],
  exports: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class PagesModule { }
